#!/usr/bin/env python3
"""Migrate Jekyll _posts/*.md into Astro content collection entries.

- Derives the slug from the filename (strips the leading YYYY-MM-DD- date),
  preserving the original Jekyll permalink slug.
- Normalizes front matter to the fields declared in src/content.config.ts.
- Leaves the Markdown body untouched (no Liquid present; /images/... paths are
  base-prefixed at build time by the rehype plugin in astro.config.mjs).
"""
import re
import pathlib
import yaml

OLD = pathlib.Path("/Users/ggorman/projects/devitocodespro.github.io/_posts")
NEW = pathlib.Path("/Users/ggorman/projects/devitocodes-web/src/content/blog")
NEW.mkdir(parents=True, exist_ok=True)

DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{1,2}-(.+)\.md$")
KEEP_STR = ("subtitle", "description", "image", "optimized_image", "category", "author")


def main() -> None:
    for f in sorted(OLD.glob("*.md")):
        m = DATE_RE.match(f.name)
        if not m:
            print("skip (no date prefix):", f.name)
            continue
        slug = m.group(1)
        text = f.read_text(encoding="utf-8")
        _, fm_raw, body = text.split("---", 2)
        fm = yaml.safe_load(fm_raw) or {}

        out: dict = {"title": str(fm.get("title", "")).strip()}
        d = fm.get("date")
        out["date"] = d.isoformat() if hasattr(d, "isoformat") else str(d)
        for k in KEEP_STR:
            if fm.get(k):
                out[k] = str(fm[k]).strip()
        tags = fm.get("tags") or []
        out["tags"] = [tags] if isinstance(tags, str) else list(tags)
        out["slug"] = slug

        new_fm = yaml.safe_dump(
            out, sort_keys=False, allow_unicode=True, default_flow_style=False
        ).strip()
        (NEW / f"{slug}.md").write_text(
            f"---\n{new_fm}\n---\n\n{body.lstrip(chr(10))}\n", encoding="utf-8"
        )
        print("wrote", f"{slug}.md")


if __name__ == "__main__":
    main()
