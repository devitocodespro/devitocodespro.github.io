#!/usr/bin/env python3
"""Convert Jekyll policy pages to Astro Markdown pages using the Prose layout.
Preserves the original permalinks (/Code_of_Conduct, /Data_Protection_Policy)
via the output filename.
"""
import json
import pathlib
import yaml

OLD = pathlib.Path("/Users/ggorman/projects/devitocodespro.github.io/policies")
NEW = pathlib.Path("/Users/ggorman/projects/devitocodes-web/src/pages")

SOURCES = ["Code_of_Conduct.md", "Data_Protection_Policy.md"]


def main() -> None:
    for name in SOURCES:
        text = (OLD / name).read_text(encoding="utf-8")
        _, fm_raw, body = text.split("---", 2)
        fm = yaml.safe_load(fm_raw) or {}
        title = str(fm.get("title", name.replace("_", " ").removesuffix(".md")))
        desc = str(fm.get("description", title))
        # json.dumps yields a valid double-quoted scalar (also valid YAML).
        out_fm = (
            "---\n"
            "layout: ../layouts/Prose.astro\n"
            f"title: {json.dumps(title, ensure_ascii=False)}\n"
            f"description: {json.dumps(desc, ensure_ascii=False)}\n"
            "---\n"
        )
        (NEW / name).write_text(out_fm + "\n" + body.lstrip("\n"), encoding="utf-8")
        print("wrote", name)


if __name__ == "__main__":
    main()
