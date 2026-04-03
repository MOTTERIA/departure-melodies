from pathlib import Path
from html import escape

station = {
    "name": "青空台",
    "kana": "あおぞらだい",
    "roman": "Aozoradai",
    "description": "青空台駅（あおぞらだいえき）は、架空県架空市に所在する空見線の架空の駅である。",
    "current_period": "2026/04/04～",
    "line_color": "#3B82F6",
    "current_rows": [
        {
            "track": "1",
            "route_main": "空見線 上下",
            "route_sub": "青空中央・星見ヶ丘方面",
            "melody": "未導入",
            "note": ""
        }
    ],
    "neighbors": [
        {
            "up_name": "青空中央",
            "up_file": "aozorachuo.html",
            "line_name": "空見線",
            "down_name": "星見ヶ丘",
            "down_file": "hoshimigaoka.html"
        }
    ]
}


def build_current_rows(rows: list[dict], line_color: str) -> str:
    html_rows = []
    for row in rows:
        melody_html = f'<div class="melody-name">{escape(row["melody"])}</div>'

        html_rows.append(f"""
        <tr>
          <td class="track-num-cell">
            <div class="track-number">{escape(row["track"])}</div>
          </td>
          <td class="linecolor-cell">
            <div class="linecolor-single" style="background:{line_color};"></div>
          </td>
          <td>
            <div class="route-main">{escape(row["route_main"])}</div>
            <div class="route-sub">{escape(row["route_sub"])}</div>
          </td>
          <td>
            {melody_html}
          </td>
          <td>
            <div class="note-small">{escape(row["note"])}</div>
          </td>
        </tr>
        """)
    return "\n".join(html_rows)


def build_neighbor_rows(rows: list[dict]) -> str:
    html_rows = []
    for row in rows:
        html_rows.append(f"""
        <tr>
          <td><a class="neighbor-link" href="{escape(row["up_file"])}">{escape(row["up_name"])}</a></td>
          <td class="neighbor-line">{escape(row["line_name"])}</td>
          <td><a class="neighbor-link" href="{escape(row["down_file"])}">{escape(row["down_name"])}</a></td>
        </tr>
        """)
    return "\n".join(html_rows)


template_path = Path("station_template.html")
output_path = Path("stations/aozoradai.html")

template = template_path.read_text(encoding="utf-8")

rendered = (
    template
    .replace("{{STATION_NAME}}", escape(station["name"]))
    .replace("{{STATION_KANA}}", escape(station["kana"]))
    .replace("{{STATION_ROMAN}}", escape(station["roman"]))
    .replace("{{STATION_DESC}}", escape(station["description"]))
    .replace("{{CURRENT_PERIOD}}", escape(station["current_period"]))
    .replace("{{LINE_COLOR}}", station["line_color"])
    .replace("{{CURRENT_ROWS}}", build_current_rows(station["current_rows"], station["line_color"]))
    .replace("{{NEIGHBOR_ROWS}}", build_neighbor_rows(station["neighbors"]))
)

output_path.parent.mkdir(parents=True, exist_ok=True)
output_path.write_text(rendered, encoding="utf-8")

print(f"生成完了: {output_path}")
