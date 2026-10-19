const ExcelJS = require('exceljs');
const path = require('path');

async function createInterviewWorkbook() {
  try {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Fariz / WebSly';
    workbook.created = new Date();

    // TƏK VƏ ƏSAS VƏRƏQ: Bütün suallar və qiymətləndirmə bir yerdə
    const sheet = workbook.addWorksheet('Müsahibə və Qiymətləndirmə', {
      views: [{ showGridLines: true }]
    });

    // ==========================================
    // 1. BAŞLIQ
    // ==========================================
    sheet.mergeCells('A1:K1');
    const titleCell = sheet.getCell('A1');
    titleCell.value = 'FULLSTACK KURSU (PEŞƏ TƏHSİLİ) — MÜSAHİBƏ VƏ QİYMƏTLƏNDİRMƏ VƏRƏQİ';
    titleCell.font = { name: 'Calibri', size: 15, bold: true, color: { argb: 'FFFFFFFF' } };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0F172A' } }; // Slate 900
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getRow(1).height = 38;

    sheet.mergeCells('A2:K2');
    const subCell = sheet.getCell('A2');
    subCell.value = 'Sistem: 5 kateqoriya × maksimum 2 bal = Cəmi 10 bal  |  Keçid: 6-10 Qəbul  •  4-5 Ehtiyat  •  0-3 İmtina';
    subCell.font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FF1E293B' } };
    subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF1F5F9' } };
    subCell.alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getRow(2).height = 24;

    // ==========================================
    // 2. BÖLMƏ: MÜSAHİBƏ SUALLARI VƏ BAL MƏNTİQİ
    // ==========================================
    sheet.mergeCells('A4:K4');
    const qSecTitle = sheet.getCell('A4');
    qSecTitle.value = '📌 MÜSAHİBƏDƏ VERİLƏCƏK SUALLAR VƏ BAL ŞKALASI (0 / 1 / 2)';
    qSecTitle.font = { name: 'Calibri', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
    qSecTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2563EB' } }; // Blue 600
    qSecTitle.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
    sheet.getRow(4).height = 28;

    // Sual cədvəli başlıqları
    sheet.mergeCells('A5:B5'); // Kateqoriya
    sheet.mergeCells('C5:F5'); // Suallar
    sheet.mergeCells('G5:I5'); // Bal İzahı
    sheet.mergeCells('J5:K5'); // Qiymətləndirmə Yanaşması

    sheet.getCell('A5').value = 'Kateqoriya (Maks. 2 bal)';
    sheet.getCell('C5').value = 'Veriləcək Şifahi Suallar';
    sheet.getCell('G5').value = 'Balların Mənası (0 / 1 / 2)';
    sheet.getCell('J5').value = 'Qərar Meyarı';

    sheet.getRow(5).height = 24;
    ['A5', 'C5', 'G5', 'J5'].forEach((addr) => {
      const c = sheet.getCell(addr);
      c.font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FF1E293B' } };
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2E8F0' } };
      c.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const questionsData = [
      {
        cat: '1. Motivasiya\n(Maks. 2 bal)',
        q: '1. Bu kursa niyə müraciət etdiniz?\n2. Veb proqramlaşdırma sahəsi sizi nə üçün maraqlandırır?\n3. 4 ay sonra kurs bitdikdə özünüzü harada görürsünüz?',
        b: '• 0 bal: Məqsədsizdir, başqası məcbur edib, passivdir\n• 1 bal: Ümumi cavab ("iş tapmaq istəyirəm"), hədəf dumanlıdır\n• 2 bal: Konkret hədəfi var, səmimi və aydın marağı görünür',
        res: 'İş tapmaq və öyrənmək əzmini yoxlayır'
      },
      {
        cat: '2. Öyrənmə Əzmi\n(Maks. 2 bal)',
        q: '1. Əvvəllər çətin bir şeyi təkbaşına necə öyrənmisiniz?\n2. Mövzunu başa düşməyəndə nə edirsiniz: dərhal buraxırsınız, yoxsa axtarırsınız?\n3. Evdə özünüzü nizamlı oxumağa necə yönləndirəcəksiniz?',
        b: '• 0 bal: Çətinlik görən kimi geri çəkilir, səbirsizdir\n• 1 bal: İstək var, amma yalnız müəllim izah edəndə öyrənə bilir\n• 2 bal: Təslim olmur, sınaq-xəta ilə araşdırır və dözümlüdür',
        res: 'Sıfırdan öyrənmə dözümlülüyünü yoxlayır'
      },
      {
        cat: '3. Kompüter Savadlılığı\n(Maks. 2 bal)',
        q: '1. Kompüteri gündəlik həyatınızda ən çox nə üçün işlədirsiniz?\n2. Hansı proqramları və ya saytları tanıyırsınız? (Word, Excel, Gmail, YouTube və s.)\n3. İnternetdə lazım olan bir məlumatı necə axtarıb tapırsınız?',
        b: '• 0 bal: Kompüterə tamamilə yaddır (heç bir təcrübəsi yoxdur)\n• 1 bal: Az istifadə edir, baza şeyləri anlayır, öyrənməyə açıqdır\n• 2 bal: Gündəlik rahat istifadəçidir, proqram və axtarışı bilir',
        res: 'Baza texniki rahatlığı yoxlayır (testsiz)'
      },
      {
        cat: '4. Zaman & Öhdəlik\n(Maks. 2 bal)',
        q: '1. Evinizdə fərdi kompüter və internet bağlantınız varmı?\n2. Dərslərdən əlavə gündə ən az 2-3 saat məşğul ola biləcəksinizmi?\n3. 4 ay ərzində kursu yarımçıq qoyma riskiniz varmı? (iş, ailə və s.)',
        b: '• 0 bal: Kompüteri yoxdur VƏ 4 ayı tamamlama riski yüksəkdir\n• 1 bal: 1 çatışmazlıq var (cihaz zəifdir), amma alternativ yolu var\n• 2 bal: Kompüter var, internet var, gündə 2-3 saat vaxtı hazırdır',
        res: 'Davamiyyət və 4 ayı bitirmə zəmanətini yoxlayır'
      },
      {
        cat: '5. Kommunikasiya & Düşüncə\n(Maks. 2 bal)',
        q: '1. Fikirlərinizi qarşınızdakına izah etmək sizə asan gəlirmi?\n2. Qrup içində başqa insanlarla birgə tapşırıq etməyə münasibətiniz necədir?\n3. Kurs mühitində yoldaşlarınızla necə ünsiyyət qurarsınız?',
        b: '• 0 bal: Çox qapalı, sualı anlamır və ya aqressiv reaksiyalar verir\n• 1 bal: Orta dərəcədə ünsiyyət, çəkinir amma normal danışır\n• 2 bal: Danışığı səlis, pozitiv, dinləməyi bacaran, komandaya hazır',
        res: 'Qrup və sinif mühitinə uyğunluğu yoxlayır'
      }
    ];

    questionsData.forEach((item, idx) => {
      const rowNum = 6 + idx;
      sheet.getRow(rowNum).height = 68;

      sheet.mergeCells(`A${rowNum}:B${rowNum}`);
      sheet.mergeCells(`C${rowNum}:F${rowNum}`);
      sheet.mergeCells(`G${rowNum}:I${rowNum}`);
      sheet.mergeCells(`J${rowNum}:K${rowNum}`);

      sheet.getCell(`A${rowNum}`).value = item.cat;
      sheet.getCell(`C${rowNum}`).value = item.q;
      sheet.getCell(`G${rowNum}`).value = item.b;
      sheet.getCell(`J${rowNum}`).value = item.res;

      const bg = idx % 2 === 0 ? 'FFFFFFFF' : 'FFF8FAFC';

      ['A', 'C', 'G', 'J'].forEach((col) => {
        const cell = sheet.getCell(`${col}${rowNum}`);
        cell.font = { name: 'Calibri', size: 10 };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
        cell.alignment = { vertical: 'middle', horizontal: col === 'A' ? 'center' : 'left', wrapText: true };
      });
      sheet.getCell(`A${rowNum}`).font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FF1E293B' } };
    });

    // Cədvəl xətləri (Suallar bölməsi)
    for (let r = 5; r <= 10; r++) {
      for (let c = 1; c <= 11; c++) {
        const cell = sheet.getRow(r).getCell(c);
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFCBD5E1' } },
          left: { style: 'thin', color: { argb: 'FFCBD5E1' } },
          bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } },
          right: { style: 'thin', color: { argb: 'FFCBD5E1' } }
        };
      }
    }

    // ==========================================
    // 3. BÖLMƏ: NAMİZƏDLƏRİN QİYMƏTLƏNDİRMƏ CƏDVƏLİ
    // ==========================================
    const evalStartRow = 12;

    sheet.mergeCells(`A${evalStartRow}:K${evalStartRow}`);
    const evalSecTitle = sheet.getCell(`A${evalStartRow}`);
    evalSecTitle.value = '👥 NAMİZƏDLƏRİN QİYMƏTLƏNDİRİLMƏSİ (BALLARI BURAYA DAXİL EDİN)';
    evalSecTitle.font = { name: 'Calibri', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
    evalSecTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0D9488' } }; // Teal 600
    evalSecTitle.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
    sheet.getRow(evalStartRow).height = 28;

    // Sütun başlıqları
    const tableHeaderRow = evalStartRow + 1;
    const evalHeaders = [
      '№',
      'Ad və Soyad',
      'Tarix',
      '1. Motivasiya\n(0-2)',
      '2. Öyrənmə\nƏzmi (0-2)',
      '3. Kompüter\nSavadı (0-2)',
      '4. Zaman &\nÖhdəlik (0-2)',
      '5. Ünsiyyət &\nDüşüncə (0-2)',
      'Toplam Bal\n(/10)',
      'Nəticə\n(Qərar)',
      'Qeydlər'
    ];

    sheet.getRow(tableHeaderRow).values = evalHeaders;
    sheet.getRow(tableHeaderRow).height = 34;

    sheet.getRow(tableHeaderRow).eachCell((cell, colNum) => {
      cell.font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FFFFFFFF' } };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E293B' } }; // Slate 800
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF94A3B8' } },
        left: { style: 'thin', color: { argb: 'FF94A3B8' } },
        bottom: { style: 'medium', color: { argb: 'FF0F172A' } },
        right: { style: 'thin', color: { argb: 'FF94A3B8' } }
      };

      if (colNum === 9) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2563EB' } }; // Blue for Total
      } else if (colNum === 10) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF059669' } }; // Emerald for Result
      }
    });

    // Nümunə namizədlər
    const sampleData = [
      { name: 'Əliyev Murad', date: '15.10.2026', m: 2, l: 2, c: 1, t: 2, k: 2, note: 'Gözəl motivasiya, kompüteri var, hazırdır' },
      { name: 'Məmmədova Leyla', date: '15.10.2026', m: 1, l: 1, c: 1, t: 1, k: 1, note: 'İstək var, amma vaxt ayırmaqda tərəddüdlüdür' },
      { name: 'Quliyev Rəşad', date: '15.10.2026', m: 0, l: 1, c: 0, t: 1, k: 0, note: 'Özü istəmir, məcbur gəlib, risklidir' }
    ];

    // 25 sətir əlavə edirik
    for (let i = 1; i <= 25; i++) {
      const currentRow = tableHeaderRow + i;
      const s = sampleData[i - 1];

      const row = sheet.getRow(currentRow);
      row.height = 25;

      row.getCell(1).value = i;
      row.getCell(2).value = s ? s.name : '';
      row.getCell(3).value = s ? s.date : '';
      row.getCell(4).value = s ? s.m : null;
      row.getCell(5).value = s ? s.l : null;
      row.getCell(6).value = s ? s.c : null;
      row.getCell(7).value = s ? s.t : null;
      row.getCell(8).value = s ? s.k : null;

      // Excel SUM formulu
      row.getCell(9).value = {
        formula: `SUM(D${currentRow}:H${currentRow})`,
        result: s ? (s.m + s.l + s.c + s.t + s.k) : 0
      };

      // Excel IF formulu: 6+ Qəbul, 4-5 Ehtiyat, 0-3 İmtina
      row.getCell(10).value = {
        formula: `IF(COUNTA(D${currentRow}:H${currentRow})=0, "", IF(I${currentRow}>=6, "Qəbul", IF(I${currentRow}>=4, "Ehtiyat", "İmtina")))`,
        result: s ? (row.getCell(9).value.result >= 6 ? 'Qəbul' : (row.getCell(9).value.result >= 4 ? 'Ehtiyat' : 'İmtina')) : ''
      };

      row.getCell(11).value = s ? s.note : '';

      // Formatlaşdırma
      row.eachCell({ includeEmpty: true }, (cell, colNum) => {
        cell.font = { name: 'Calibri', size: 10 };
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
        };

        if ([1, 3, 4, 5, 6, 7, 8, 9, 10].includes(colNum)) {
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
        } else {
          cell.alignment = { vertical: 'middle', horizontal: 'left' };
        }

        if (i % 2 === 0) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } };
        }
      });

      row.getCell(9).font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FF1D4ED8' } };
      row.getCell(10).font = { name: 'Calibri', size: 10.5, bold: true };
    }

    // Sütun enləri
    sheet.columns = [
      { width: 5 },   // A: №
      { width: 22 },  // B: Ad Soyad
      { width: 13 },  // C: Tarix
      { width: 14 },  // D: Motivasiya
      { width: 14 },  // E: Öyrənmə Əzmi
      { width: 14 },  // F: Kompüter Savadı
      { width: 15 },  // G: Zaman & Öhdəlik
      { width: 16 },  // H: Ünsiyyət
      { width: 13 },  // I: Toplam Bal
      { width: 13 },  // J: Nəticə
      { width: 34 }   // K: Qeydlər
    ];

    // Faylı yazırıq
    const mainPath = path.join('c:\\Users\\Fariz\\Desktop\\WebSly', 'Musahibe_Qiymetlendirme.xlsx');
    const newPath = path.join('c:\\Users\\Fariz\\Desktop\\WebSly', 'Musahibe_Qiymetlendirme_Tam.xlsx');
    
    // Əvvəlcə Tam versiyaya yazırıq
    await workbook.xlsx.writeFile(newPath);
    console.log(`Excel faylı yaradıldı: ${newPath}`);

    try {
      await workbook.xlsx.writeFile(mainPath);
      console.log(`Əsas fayl da yeniləndi: ${mainPath}`);
    } catch (lockErr) {
      console.log('Əsas fayl hal-hazırda Excel-də açıqdır. Yeni versiya "Musahibe_Qiymetlendirme_Tam.xlsx" olaraq saxlanıldı.');
    }
  } catch (error) {
    console.error('Xəta baş verdi:', error);
  }
}

createInterviewWorkbook();
