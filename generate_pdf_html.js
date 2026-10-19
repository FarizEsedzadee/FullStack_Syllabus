const fs = require('fs');
const path = require('path');
const { COURSE, modules, TYPE } = require('./data.js');

let html = `<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <title>Full-Stack Web Development — Tədris Planı</title>
    <style>
        @page {
            size: A4;
            margin: 15mm 15mm 15mm 15mm;
        }
        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif;
            color: #111827;
            margin: 0;
            padding: 0;
            font-size: 10pt;
            line-height: 1.45;
        }
        .header {
            border-bottom: 2px solid #1f2937;
            padding-bottom: 12px;
            margin-bottom: 18px;
        }
        .header h1 {
            font-size: 19pt;
            margin: 0 0 5px 0;
            color: #111827;
            font-weight: 800;
            letter-spacing: -0.5px;
        }
        .meta-line {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            color: #4b5563;
            font-size: 9.5pt;
            margin-top: 6px;
        }
        .meta-line span strong {
            color: #111827;
        }
        .module {
            margin-bottom: 20px;
            page-break-inside: auto;
        }
        .module-title {
            font-size: 11pt;
            font-weight: 700;
            background: #f3f4f6;
            color: #111827;
            padding: 6px 10px;
            border-left: 4px solid #374151;
            margin-bottom: 8px;
            page-break-after: avoid;
            border-radius: 0 4px 4px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 9.5pt;
            margin-bottom: 8px;
        }
        th {
            background: #f9fafb;
            color: #374151;
            text-align: left;
            padding: 6px 10px;
            border: 1px solid #e5e7eb;
            font-weight: 600;
            font-size: 8.5pt;
            text-transform: uppercase;
        }
        td {
            padding: 5px 10px;
            border: 1px solid #e5e7eb;
            vertical-align: top;
        }
        tr {
            page-break-inside: avoid;
        }
        tr:nth-child(even) td {
            background-color: #fafafa;
        }
        .col-num {
            width: 80px;
            font-weight: 700;
            color: #111827;
            white-space: nowrap;
        }
        .col-topics ul {
            margin: 0;
            padding-left: 16px;
        }
        .col-topics li {
            margin-bottom: 2px;
            color: #374151;
        }
        .review-row td {
            background-color: #f0fdf4 !important;
            border-top: 1.5px solid #86efac;
            border-bottom: 1.5px solid #86efac;
        }
        .review-row .col-num {
            color: #166534;
            font-weight: 800;
        }
        .self-study-badge {
            display: inline-block;
            background: #dcfce7;
            color: #15803d;
            font-size: 7.5pt;
            font-weight: 700;
            padding: 1px 6px;
            border-radius: 4px;
            margin-right: 4px;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Full-Stack Development — Tədris Planı (Sillabus)</h1>
        <div class="meta-line">
            <span><strong>İxtisas:</strong> Full-Stack Web Developer</span>
            <span><strong>Təlimçi:</strong> ${COURSE.instructor}</span>
            <span><strong>Müddət:</strong> 9 Ay (108 Dərs)</span>
            <span><strong>Qrafik:</strong> Həftədə 3 dərs (B.e, Ç.a, Ş.)</span>
            <span><strong>Struktur:</strong> 100 Əsas Dərs + 8 Review & Buffer Dərsi</span>
        </div>
    </div>
`;

modules.forEach((mod) => {
  const lessons = mod.items.filter(i => i.type === TYPE.LESSON || i.type === TYPE.CONCEPT || i.type === TYPE.REVIEW);

  html += `
    <div class="module">
        <div class="module-title">Modul ${mod.number}: ${mod.title}</div>

        <table>
            <thead>
                <tr>
                    <th class="col-num">Dərs №</th>
                    <th class="col-topics">Tədris Edilən Mövzular</th>
                </tr>
            </thead>
            <tbody>
  `;

  lessons.forEach((l) => {
    const isConcept = l.type === TYPE.CONCEPT;
    const isReview = l.type === TYPE.REVIEW;
    let numLabel = isConcept ? 'Giriş' : `Dərs ${l.id}`;
    if (isReview) numLabel = `Dərs ${l.id} 🔄`;

    const trClass = isReview ? ' class="review-row"' : '';

    html += `
        <tr${trClass}>
            <td class="col-num">${numLabel}</td>
            <td class="col-topics">
                <ul>
                    ${l.topics.map(t => {
                      if (t.includes('Özünü Öyrənmə')) {
                        return `<li style="color:#15803d; font-weight:600; margin-top:2px;"><span class="self-study-badge">Özünü Öyrənmə</span> ${t.replace('💡 Özünü Öyrənmə Materialı: ', '').replace('💡 Özünü Öyrənmə: ', '')}</li>`;
                      }
                      return `<li>${t}</li>`;
                    }).join('')}
                </ul>
            </td>
        </tr>
    `;
  });

  html += `
            </tbody>
        </table>
    </div>
  `;
});

html += `
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'syllabus_print.html'), html, 'utf8');
console.log('Regenerated ultra-simple syllabus_print.html');
