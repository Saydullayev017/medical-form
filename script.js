
        document.addEventListener('DOMContentLoaded', function() {
            // Элементы управления
            const saveBtn = document.getElementById('saveBtn');
            const resetBtn = document.getElementById('resetBtn');
            const fillExampleBtn = document.getElementById('fillExampleBtn');
            const statusMessage = document.getElementById('statusMessage');
            
            // Кнопка для заполнения примера данных
            fillExampleBtn.addEventListener('click', function() {
                if (confirm('Namuna ma\'lumotlar bilan to\'ldirishni xohlaysizmi? Bu sizning joriy ma\'lumotlaringizni o\'chirib tashlaydi.')) {
                    fillExampleData();
                    showStatus('Namuna ma\'lumotlar bilan to\'ldirildi', true);
                }
            });
            
            // Функция заполнения примера данных
            function fillExampleData() {
                // Основные данные пациента (первый лист)
                document.getElementById('examDate').value = '2026-01-16';
                document.getElementById('examTime').value = '16:43';
                document.getElementById('patientName').value = 'Turdibayev Raximjan';
                document.getElementById('patientId').value = '1395';
                document.getElementById('arrivalDate').value = '2026-01-16';
                document.getElementById('birthDate').value = '1966-10-05';
                document.getElementById('address').value = 'Toshkent Viloyati, ANGREN / Ozbekiston Mustaqillik kochasi 170-uy';
                
                // Шикоятлар
                document.getElementById('complaints').value = 'belning chap qismida og\'riq, siyganda achishishi, umumiy xolisizlik.';
                
                // Anamnesis morbi
                document.getElementById('anamnesisMorbi').value = 'Anamnezdan ma\'lumki, yuqoridagi shikoyatlar bemorda 2025 yil noyabr oyidan boshlangan. va bemor shifokorga murojat qilmagan. 06/12/25 shikoyatlar takrorlanganligi sababli Angrenda urolog ko\'rigiga borgan va buyrak ultratovush tekshiruvida o\'smaga o\'xshash narsa aniqlangan. 16/01/2026 bemor RIO va RIATM poliklinikasiga yo\'llanma olib kelgan. 16/01/2026 RIO va RIATM onkuorologiya bo\'limiga diagnostik davo uchun gospitalizatsiya qilindi.';
                
                // Anamnesis vitae
                document.getElementById('epidemic').value = 'Yo\'q';
                document.getElementById('tuberculosis').value = 'Yo\'q';
                document.getElementById('hiv').value = 'Yo\'q';
                document.getElementById('hepatitis').value = 'Yo\'q';
                document.getElementById('syphilis').value = 'Yo\'q';
                document.getElementById('covid').value = 'Yo\'q';
                document.getElementById('allergy').value = 'Dorilarga allergiya kuzatilmagan';
                document.getElementById('comorbidities').value = 'Surunkali kalkulyoz xolesistit';
                document.getElementById('familyHistory').value = 'Xususiyatsiz';
                document.getElementById('implants').value = 'Yo\'q';
                document.getElementById('surgeries').value = 'Yo\'q';
                document.getElementById('transfusions').value = 'Yo\'q';
                
                // Объективный осмотр
                document.getElementById('temperature').value = '36,0°C';
                document.getElementById('height').value = '164 sm';
                document.getElementById('weight').value = '85 kg';
                document.getElementById('condition').value = 'qoniqarli';
                document.getElementById('consciousness').value = 'kontaktga kirishadi, shaxs, vaqt va makonda mo\'ljalga ega';
                document.getElementById('bodyType').value = 'to\'g\'ri';
                document.getElementById('nutrition').value = 'yetarli';
                document.getElementById('skin').value = 'tan rangli, normal namlikda, toshmasiz';
                document.getElementById('mucous').value = 'pushti, toshmasiz';
                document.getElementById('edema').value = 'yo\'q';
                document.getElementById('lymphNodes').value = 'kattalashmagan';
                document.getElementById('thyroid').value = 'kattalashmagan';
                document.getElementById('musculoskeletal').value = 'xususiyatsiz';
                
                // Сердечно-сосудистая система
                document.getElementById('heartSounds').value = 'aniq';
                document.getElementById('pulse').value = '106';
                document.getElementById('heartRate').value = '106';
                document.getElementById('bloodPressure').value = '120/80';
                
                // Дыхательная система
                document.getElementById('respirationRate').value = '18';
                document.getElementById('saturation').value = '98%';
                document.getElementById('auscultation').value = 'vesikulyar nafas, xirillashlar yo\'q';
                
                // Пищеварительная система
                document.getElementById('tongue').value = 'nam, toshmasiz';
                document.getElementById('abdomen').value = 'yumaloq, yumshoq, og\'riqsiz';
                document.getElementById('peritonealSigns').value = 'yo\'q';
                document.getElementById('liver').value = 'qovurg\'a chetidan chiqmagan';
                document.getElementById('spleen').value = 'chopilmaydi';
                document.getElementById('bowelFunction').value = 'normal';
                
                // Мочеполовая система
                document.getElementById('kidneyPalpation').value = 'o\'ng tarafda og\'riqsiz, chap tarafda og\'riqli';
                document.getElementById('kidneyPercussion').value = 'og\'riqsiz';
                document.getElementById('urination').value = 'qiyinlashgan, og\'riqli, tez-tez';
                document.getElementById('diuresis').value = 'yetarli';
                document.getElementById('genitals').value = 'to\'g\'ri rivojlangan';
                document.getElementById('prostate').value = 'kattalashmagan, og\'riqsiz, elastik konsistensiyada';
                
                // Диагноз
                document.getElementById('diagnosis').value = 'C64 Susp. Chap buyrak o\'smasi T3N0M0. Chap buyrak venasi va pastki kovak venasi o\'sma trombi';
                document.getElementById('comorbidDiagnosis').value = 'Surunkali kalkulyoz xolesistit';
                
                // План обследования
                document.getElementById('examinationPlan').value = '1. KT skanerlash\n2. Biopsiya\n3. Qon va siydik analizlari\n4. EKG\n5. Rengtgen';
                
                // Обоснование назначений
                document.getElementById('prescriptionBasis').value = 'Bemorga o\'tkazilgan klinik tekshiruvlar natijasida Radikal nefrektomiya. Trombektomiya jarrohlik amaliyotini o\'tkazish maqsadga muvofiq dep topildi.';
                
                // Согласие и подписи (уже предзаполнены в HTML)
                
                // Данные для консилиума
                document.getElementById('consiliumDate').value = '2026-01-19';
                document.getElementById('consiliumPatientName').value = 'Turdibayev Raximjan';
                document.getElementById('consiliumPatientId').value = '1395';
                document.getElementById('consiliumArrivalDate').value = '2026-01-16';
                document.getElementById('consiliumBirthDate').value = '1966-10-05';
                document.getElementById('consiliumAddress').value = 'Toshkent Viloyati, ANGREN / Ozbekiston Mustaqillik kochasi 170-uy';
                document.getElementById('consiliumComplaints').value = 'belning chap qismida og\'riq, siyganda achishishi, umumiy xolisizlik.';
                document.getElementById('consiliumAnamnesisMorbi').value = document.getElementById('anamnesisMorbi').value;
                document.getElementById('consiliumAnamnesisVitae').value = 'Boshqa o\'tkazgan kasalliklarini yengil shamollashlar bilan bog\'laydi. Dorilarga allergiya kuzatilmagan.';
                
                // Поля уже предзаполнены в HTML, но на всякий случай установим их значения
                // STATUS PRAESENS поля
                document.getElementById('consiliumTemperature').value = '36,0°C';
                document.getElementById('consiliumHeight').value = '164 sm';
                document.getElementById('consiliumWeight').value = '85 kg';
                document.getElementById('consiliumCondition').value = 'qoniqarli';
                document.getElementById('consiliumConsciousness').value = 'kontaktga kirishadi, shaxs, vaqt va makonda mo\'ljalga ega';
                document.getElementById('consiliumBodyType').value = 'to\'g\'ri';
                document.getElementById('consiliumNutrition').value = 'yetarli';
                document.getElementById('consiliumSkin').value = 'tan rangli, normal namlikda, toshmasiz';
                document.getElementById('consiliumMucous').value = 'pushti, toshmasiz';
                document.getElementById('consiliumEdema').value = 'yo\'q';
                document.getElementById('consiliumLymphNodes').value = 'kattalashmagan';
                document.getElementById('consiliumThyroid').value = 'kattalashmagan';
                document.getElementById('consiliumMusculoskeletal').value = 'xususiyatsiz';
                
                // STATUS LOCALIS поля
                document.getElementById('consiliumKidneys').value = 'palpatsiyada aniqlanmaydi';
                document.getElementById('consiliumKidneyPalpation').value = 'o\'ng tarafda og\'riqsiz, chap tarafda og\'riqli';
                document.getElementById('consiliumKidneyPercussion').value = 'og\'riqsiz';
                document.getElementById('consiliumBladder').value = 'palpatsiyada aniqlanmaydi';
                document.getElementById('consiliumUrination').value = 'qiyinlashgan, og\'riqli, tez-tez';
                document.getElementById('consiliumDiuresis').value = 'yetarli';
                document.getElementById('consiliumGenitals').value = 'to\'g\'ri rivojlangan';
                document.getElementById('consiliumProstate').value = 'kattalashmagan, og\'riqsiz, elastik konsistensiyada';
                
                // TEKSHIRUVLAR поля
                document.getElementById('consiliumEKG').value = 'Sinus ritm, yurak urish tezligi daqiqasiga 106 marta. Yurakning elektr o\'qi chap tomonga keskin og\'gan. Chap qorinchani gipertrofiyasi';
                document.getElementById('consiliumBloodTests').value = 'Hb- 146; RBC- 4,85; PLT- 241; WBC- 8,47; NEU%- 72,7%; AIAT- 26,4; AsAT- 18,7; kreatinin- 108,8; Mochevina- 6,7';
                document.getElementById('consiliumOtherTests').value = 'Buyrak ultratovush tekshiruvida o\'smaga o\'xshash narsa aniqlangan.';
                
                // TASHXIS (остается textarea)
                document.getElementById('consiliumTashxis').value = 'Bemorga o\'tqazilgan kompleks tekshiruvlar natijasi asosida quyidagi tashxis qo\'yildi:\nTashxis: C64 Susp. Chap buyrak o\'smasi T3CNoMo. Chap buyrak venasi va pastki kovak venasi o\'sma trombi\nHamroh kasalliklar: Surunkali kalkulyoz xolesistit.';
                
                // KONSILIUM QARORI (остается textarea)
                document.getElementById('consiliumDecision').value = 'Bemorga o\'tkazilgan klinik tekshiruvlar natijasida Radikal nefrektomiya. Trombektomiya jarrohlik amaliyotini o\'tkazish maqsadga muvofiq dep topildi. Bemor va uning qarindoshlariga jarrohlik amaliyotidan keyin kuzatilishi mumkin bo\'lgan asoratlarga oid ma\'lumot berildi va jarrohlik amaliyotiga rozilik olindi.';
                
                // Участники консилиума
                document.getElementById('consiliumHeadDoctor').value = 't.f.n. Xalmurzaev O.A.';
                document.getElementById('consiliumDepartmentHead').value = 't.f.n. Xasanov Sh.T.';
                document.getElementById('consiliumChemotherapyHead').value = 't.f.n. Tuyjanova X.X.';
                document.getElementById('consiliumAttendingDoctor').value = 'Abdikarimov M.G.';
                document.getElementById('consiliumDepartmentDoctor').value = 'Abdusamatov N.T.';
                
                // Данные для эпикриза (третий лист)
                document.getElementById('epicrisPatientName').value = 'Turdibayev Raximjan';
                document.getElementById('epicrisPatientId').value = '1395';
                document.getElementById('epicrisArrivalDate').value = '2026-01-16';
                document.getElementById('epicrisBirthDate').value = '1966-10-05';
                document.getElementById('epicrisAddress').value = 'Toshkent Viloyati, ANGREN / Ozbekiston Mustaqillik kochasi 170-uy';
                
                document.getElementById('epicrisComplaints').value = 'belning chap qismida og\'riq, siyganda achishishi, umumiy xolisizlik.';
                
                document.getElementById('epicrisAnamnesisMorbi').value = 'Anamnezdan ma\'lumki, yuqoridagi shikoyatlar bemorda 2025 yil noyabr oyidan boshlangan. va bemor shifokorga murojat qilmagan. 06/12/25 shikoyatlar takrorlanganligi sababli Angrenda urolog ko\'rigiga borgan va buyrak ultratovush tekshiruvida o\'smaga o\'xshash narsa aniqlangan. 16/01/2026 bemor RIO va RIATM poliklinikasiga yo\'llanma olib kelgan. 16/01/2026 RIO va RIATM onkuorologiya bo\'limiga diagnostik davo uchun gospitalizatsiya qilindi.';
                
                document.getElementById('epicrisAnamnesisVitae').value = 'Boshqa o\'tkazgan kasalliklarini yengil shamollashlar bilan bog\'laydi. Dorilarga allergiya kuzatilmagan. Surunkali kalkulyoz xolesistit mavjud.';
                
                document.getElementById('epicrisDiagnosis').value = 'C64 Susp. Chap buyrak o\'smasi T3N0M0. Chap buyrak venasi va pastki kovak venasi o\'sma trombi';
                document.getElementById('epicrisComorbidDiagnosis').value = 'Surunkali kalkulyoz xolesistit';
                
                // Status praesens
                document.getElementById('epicrisTemperature').value = '36,0°C';
                document.getElementById('epicrisHeight').value = '164 sm';
                document.getElementById('epicrisWeight').value = '85 kg';
                document.getElementById('epicrisCondition').value = 'qoniqarli';
                document.getElementById('epicrisConsciousness').value = 'kontaktga kirishadi, shaxs, vaqt va makonda mo\'ljalga ega';
                document.getElementById('epicrisBodyType').value = 'to\'g\'ri';
                document.getElementById('epicrisNutrition').value = 'yetarli';
                document.getElementById('epicrisSkin').value = 'tan rangli, normal namlikda, toshmasiz';
                document.getElementById('epicrisMucous').value = 'pushti, toshmasiz';
                document.getElementById('epicrisEdema').value = 'yo\'q';
                document.getElementById('epicrisLymphNodes').value = 'kattalashmagan';
                document.getElementById('epicrisThyroid').value = 'kattalashmagan';
                document.getElementById('epicrisMusculoskeletal').value = 'xususiyatsiz';
                
                // Status localis
                document.getElementById('epicrisKidneys').value = 'palpatsiyada aniqlanmaydi';
                document.getElementById('epicrisKidneyPalpation').value = 'o\'ng tarafda og\'riqsiz, chap tarafda og\'riqli';
                document.getElementById('epicrisKidneyPercussion').value = 'og\'riqsiz';
                document.getElementById('epicrisBladder').value = 'palpatsiyada aniqlanmaydi';
                document.getElementById('epicrisUrination').value = 'qiyinlashgan, og\'riqli, tez-tez';
                document.getElementById('epicrisDiuresis').value = 'yetarli';
                document.getElementById('epicrisGenitals').value = 'to\'g\'ri rivojlangan';
                document.getElementById('epicrisProstate').value = 'kattalashmagan, og\'riqsiz, elastik konsistensiyada';
                
                // Tekshiruvlar
                document.getElementById('epicrisUTT').value = 'Chap buyrakda o\'smaga o\'xshash hosila, 45x50 mm hajmli, buyrak to\'qimalarining buzilishi kuzatilmoqda.';
                document.getElementById('epicrisConclusion').value = 'Chap buyrak o\'smasi (T3N0M0). O\'sma trombi buyrak venasiga va pastki kovak venaga tarqalgan.';
                document.getElementById('epicrisBloodTests').value = 'Hb- 146; RBC- 4,85; PLT- 241; WBC- 8,47; NEU%- 72,7%; AIAT- 26,4; AsAT- 18,7; kreatinin- 108,8; Mochevina- 6,7';
                
                // Davo va reja
                document.getElementById('epicrisPlanned').value = 'Radikal nefrektomiya. Trombektomiya';
                document.getElementById('epicrisAnesthesia').value = 'Umumiy anesteziya (endotraxeal intubatsiya)';
                document.getElementById('epicrisRecommendation').value = 'Jarrohlikdan keyin intensiv terapiya bo\'limida kuzatish. Antibiotik profilaktikasi. Analgetik terapiya.';
                
                // Imzolar
                document.getElementById('epicrisAttendingDoctor').value = 'Abdikarimov M.G.';
                document.getElementById('epicrisHeadDoctor').value = 't.f.n. Xalmurzaev O.A.';
                document.getElementById('epicrisDepartmentHead').value = 't.f.n. Xasanov Sh.T.';
                document.getElementById('epicrisAnesthesiologist').value = 't.f.n. Karimov B.A.';
                document.getElementById('epicrisDepartmentDoctor').value = 'Abdusamatov N.T.';
            }
            
            // Форматирование даты для отображения
            function formatDateForDisplay(dateString) {
                if (!dateString) return '';
                const date = new Date(dateString);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}.${month}.${year}`;
            }
            
            // Форматирование времени
            function formatTimeForDisplay(timeString) {
                if (!timeString) return '';
                const [hours, minutes] = timeString.split(':');
                return `${hours}:${minutes}`;
            }
            
            // Функция показа статуса
            function showStatus(message, isSuccess = true) {
                statusMessage.textContent = message;
                statusMessage.className = 'status ' + (isSuccess ? 'status-success' : 'status-error');
                statusMessage.style.display = 'block';
                
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 5000);
            }
            
            // Функция сброса формы
            resetBtn.addEventListener('click', function() {
                if (confirm('Haqiqatan ham barcha ma\'lumotlarni tozalamoqchimisiz?')) {
                    // Очистка всех полей
                    const inputs = document.querySelectorAll('input, textarea');
                    inputs.forEach(input => {
                        input.value = '';
                    });
                    
                    // Восстановление предзаполненных значений для подписей первого листа
                    document.getElementById('consent').value = 'Olingan.';
                    document.getElementById('headDoctor').value = 't.f.n. Xalmurzaev O.A.';
                    document.getElementById('departmentHead').value = 't.f.n. Xasanov Sh. T.';
                    document.getElementById('attendingDoctor').value = 'Abdikarimov M.G.';
                    
                    // Восстановление предзаполненных значений для консилиума
                    document.getElementById('consiliumDate').value = '2026-01-19';
                    
                    // STATUS PRAESENS поля
                    document.getElementById('consiliumTemperature').value = '36,0°C';
                    document.getElementById('consiliumHeight').value = '164 sm';
                    document.getElementById('consiliumWeight').value = '85 kg';
                    document.getElementById('consiliumCondition').value = 'qoniqarli';
                    document.getElementById('consiliumConsciousness').value = 'kontaktga kirishadi, shaxs, vaqt va makonda mo\'ljalga ega';
                    document.getElementById('consiliumBodyType').value = 'to\'g\'ri';
                    document.getElementById('consiliumNutrition').value = 'yetarli';
                    document.getElementById('consiliumSkin').value = 'tan rangli, normal namlikda, toshmasiz';
                    document.getElementById('consiliumMucous').value = 'pushti, toshmasiz';
                    document.getElementById('consiliumEdema').value = 'yo\'q';
                    document.getElementById('consiliumLymphNodes').value = 'kattalashmagan';
                    document.getElementById('consiliumThyroid').value = 'kattalashmagan';
                    document.getElementById('consiliumMusculoskeletal').value = 'xususiyatsiz';
                    
                    // STATUS LOCALIS поля
                    document.getElementById('consiliumKidneys').value = 'palpatsiyada aniqlanmaydi';
                    document.getElementById('consiliumKidneyPalpation').value = 'o\'ng tarafda og\'riqsiz, chap tarafda og\'riqli';
                    document.getElementById('consiliumKidneyPercussion').value = 'og\'riqsiz';
                    document.getElementById('consiliumBladder').value = 'palpatsiyada aniqlanmaydi';
                    document.getElementById('consiliumUrination').value = 'qiyinlashgan, og\'riqli, tez-tez';
                    document.getElementById('consiliumDiuresis').value = 'yetarli';
                    document.getElementById('consiliumGenitals').value = 'to\'g\'ri rivojlangan';
                    document.getElementById('consiliumProstate').value = 'kattalashmagan, og\'riqsiz, elastik konsistensiyada';
                    
                    // TEKSHIRUVLAR поля
                    document.getElementById('consiliumEKG').value = 'Sinus ritm, yurak urish tezligi daqiqasiga 106 marta. Yurakning elektr o\'qi chap tomonga keskin og\'gan. Chap qorinchani gipertrofiyasi';
                    document.getElementById('consiliumBloodTests').value = 'Hb- 146; RBC- 4,85; PLT- 241; WBC- 8,47; NEU%- 72,7%; AIAT- 26,4; AsAT- 18,7; kreatinin- 108,8; Mochevina- 6,7';
                    document.getElementById('consiliumOtherTests').value = '';
                    
                    // TASHXIS
                    document.getElementById('consiliumTashxis').value = 'Bemorga o\'tqazilgan kompleks tekshiruvlar natijasi asosida quyidagi tashxis qo\'yildi:\nTashxis: C64 Susp. Chap buyrak o\'smasi T3CNoMo. Chap buyrak venasi va pastki kovak venasi o\'sma trombi\nHamroh kasalliklar: Surunkali kalkulyoz xolesistit.';
                    
                    // KONSILIUM QARORI
                    document.getElementById('consiliumDecision').value = 'Bemorga o\'tkazilgan klinik tekshiruvlar natijasida Radikal nefrektomiya. Trombektomiya jarrohlik amaliyotini o\'tkazish maqsadga muvofiq dep topildi. Bemor va uning qarindoshlariga jarrohlik amaliyotidan keyin kuzatilishi mumkin bo\'lgan asoratlarga oid ma\'lumot berildi va jarrohlik amaliyotiga rozilik olindi.';
                    
                    // Участники консилиума
                    document.getElementById('consiliumHeadDoctor').value = 't.f.n. Xalmurzaev O.A.';
                    document.getElementById('consiliumDepartmentHead').value = 't.f.n. Xasanov Sh.T.';
                    document.getElementById('consiliumChemotherapyHead').value = 't.f.n. Tuyjanova X.X.';
                    document.getElementById('consiliumAttendingDoctor').value = 'Abdikarimov M.G.';
                    document.getElementById('consiliumDepartmentDoctor').value = 'Abdusamatov N.T.';
                    
                    showStatus('Barcha ma\'lumotlar tozalandi', true);
                }
            });
            
            // Функция генерации DOCX документа
            saveBtn.addEventListener('click', async function() {
                try {
                    // Проверка обязательных полей
                    const requiredFields = ['patientName', 'arrivalDate', 'birthDate', 'address', 'diagnosis'];
                    let missingFields = [];
                    
                    requiredFields.forEach(fieldId => {
                        const field = document.getElementById(fieldId);
                        if (!field.value.trim()) {
                            missingFields.push(field.previousElementSibling?.textContent || fieldId);
                        }
                    });
                    
                    if (missingFields.length > 0) {
                        showStatus(`Iltimos, quyidagi maydonlarni to'ldiring: ${missingFields.join(', ')}`, false);
                        return;
                    }
                    
                    // Сбор данных из формы
                    const formData = {
                        // Основные данные
                        examDate: document.getElementById('examDate').value,
                        examTime: document.getElementById('examTime').value,
                        patientName: document.getElementById('patientName').value,
                        patientId: document.getElementById('patientId').value,
                        arrivalDate: document.getElementById('arrivalDate').value,
                        birthDate: document.getElementById('birthDate').value,
                        address: document.getElementById('address').value,
                        complaints: document.getElementById('complaints').value,
                        anamnesisMorbi: document.getElementById('anamnesisMorbi').value,
                        epidemic: document.getElementById('epidemic').value,
                        tuberculosis: document.getElementById('tuberculosis').value,
                        hiv: document.getElementById('hiv').value,
                        hepatitis: document.getElementById('hepatitis').value,
                        syphilis: document.getElementById('syphilis').value,
                        covid: document.getElementById('covid').value,
                        allergy: document.getElementById('allergy').value,
                        comorbidities: document.getElementById('comorbidities').value,
                        familyHistory: document.getElementById('familyHistory').value,
                        implants: document.getElementById('implants').value,
                        surgeries: document.getElementById('surgeries').value,
                        transfusions: document.getElementById('transfusions').value,
                        temperature: document.getElementById('temperature').value,
                        height: document.getElementById('height').value,
                        weight: document.getElementById('weight').value,
                        condition: document.getElementById('condition').value,
                        consciousness: document.getElementById('consciousness').value,
                        bodyType: document.getElementById('bodyType').value,
                        nutrition: document.getElementById('nutrition').value,
                        skin: document.getElementById('skin').value,
                        mucous: document.getElementById('mucous').value,
                        edema: document.getElementById('edema').value,
                        lymphNodes: document.getElementById('lymphNodes').value,
                        thyroid: document.getElementById('thyroid').value,
                        musculoskeletal: document.getElementById('musculoskeletal').value,
                        heartSounds: document.getElementById('heartSounds').value,
                        pulse: document.getElementById('pulse').value,
                        heartRate: document.getElementById('heartRate').value,
                        bloodPressure: document.getElementById('bloodPressure').value,
                        respirationRate: document.getElementById('respirationRate').value,
                        saturation: document.getElementById('saturation').value,
                        auscultation: document.getElementById('auscultation').value,
                        tongue: document.getElementById('tongue').value,
                        abdomen: document.getElementById('abdomen').value,
                        peritonealSigns: document.getElementById('peritonealSigns').value,
                        liver: document.getElementById('liver').value,
                        spleen: document.getElementById('spleen').value,
                        bowelFunction: document.getElementById('bowelFunction').value,
                        kidneyPalpation: document.getElementById('kidneyPalpation').value,
                        kidneyPercussion: document.getElementById('kidneyPercussion').value,
                        urination: document.getElementById('urination').value,
                        diuresis: document.getElementById('diuresis').value,
                        genitals: document.getElementById('genitals').value,
                        prostate: document.getElementById('prostate').value,
                        diagnosis: document.getElementById('diagnosis').value,
                        comorbidDiagnosis: document.getElementById('comorbidDiagnosis').value,
                        examinationPlan: document.getElementById('examinationPlan').value,
                        prescriptionBasis: document.getElementById('prescriptionBasis').value,
                        consent: document.getElementById('consent').value,
                        headDoctor: document.getElementById('headDoctor').value,
                        departmentHead: document.getElementById('departmentHead').value,
                        attendingDoctor: document.getElementById('attendingDoctor').value,
                        
                        // Данные консилиума
                        consiliumDate: document.getElementById('consiliumDate').value,
                        consiliumPatientName: document.getElementById('consiliumPatientName').value,
                        consiliumPatientId: document.getElementById('consiliumPatientId').value,
                        consiliumArrivalDate: document.getElementById('consiliumArrivalDate').value,
                        consiliumBirthDate: document.getElementById('consiliumBirthDate').value,
                        consiliumAddress: document.getElementById('consiliumAddress').value,
                        consiliumComplaints: document.getElementById('consiliumComplaints').value,
                        consiliumAnamnesisMorbi: document.getElementById('consiliumAnamnesisMorbi').value,
                        consiliumAnamnesisVitae: document.getElementById('consiliumAnamnesisVitae').value,
                        
                        // STATUS PRAESENS поля
                        consiliumTemperature: document.getElementById('consiliumTemperature').value,
                        consiliumHeight: document.getElementById('consiliumHeight').value,
                        consiliumWeight: document.getElementById('consiliumWeight').value,
                        consiliumCondition: document.getElementById('consiliumCondition').value,
                        consiliumConsciousness: document.getElementById('consiliumConsciousness').value,
                        consiliumBodyType: document.getElementById('consiliumBodyType').value,
                        consiliumNutrition: document.getElementById('consiliumNutrition').value,
                        consiliumSkin: document.getElementById('consiliumSkin').value,
                        consiliumMucous: document.getElementById('consiliumMucous').value,
                        consiliumEdema: document.getElementById('consiliumEdema').value,
                        consiliumLymphNodes: document.getElementById('consiliumLymphNodes').value,
                        consiliumThyroid: document.getElementById('consiliumThyroid').value,
                        consiliumMusculoskeletal: document.getElementById('consiliumMusculoskeletal').value,
                        
                        // STATUS LOCALIS поля
                        consiliumKidneys: document.getElementById('consiliumKidneys').value,
                        consiliumKidneyPalpation: document.getElementById('consiliumKidneyPalpation').value,
                        consiliumKidneyPercussion: document.getElementById('consiliumKidneyPercussion').value,
                        consiliumBladder: document.getElementById('consiliumBladder').value,
                        consiliumUrination: document.getElementById('consiliumUrination').value,
                        consiliumDiuresis: document.getElementById('consiliumDiuresis').value,
                        consiliumGenitals: document.getElementById('consiliumGenitals').value,
                        consiliumProstate: document.getElementById('consiliumProstate').value,
                        
                        // TEKSHIRUVLAR поля
                        consiliumEKG: document.getElementById('consiliumEKG').value,
                        consiliumBloodTests: document.getElementById('consiliumBloodTests').value,
                        consiliumOtherTests: document.getElementById('consiliumOtherTests').value,
                        
                        // TASHXIS и KONSILIUM QARORI
                        consiliumTashxis: document.getElementById('consiliumTashxis').value,
                        consiliumDecision: document.getElementById('consiliumDecision').value,
                        
                        // Участники консилиума
                        consiliumHeadDoctor: document.getElementById('consiliumHeadDoctor').value,
                        consiliumDepartmentHead: document.getElementById('consiliumDepartmentHead').value,
                        consiliumChemotherapyHead: document.getElementById('consiliumChemotherapyHead').value,
                        consiliumAttendingDoctor: document.getElementById('consiliumAttendingDoctor').value,
                        consiliumDepartmentDoctor: document.getElementById('consiliumDepartmentDoctor').value,
                        
                        // Данные эпикриза (третий лист)
                        epicrisPatientName: document.getElementById('epicrisPatientName').value,
                        epicrisPatientId: document.getElementById('epicrisPatientId').value,
                        epicrisArrivalDate: document.getElementById('epicrisArrivalDate').value,
                        epicrisBirthDate: document.getElementById('epicrisBirthDate').value,
                        epicrisAddress: document.getElementById('epicrisAddress').value,
                        epicrisComplaints: document.getElementById('epicrisComplaints').value,
                        epicrisAnamnesisMorbi: document.getElementById('epicrisAnamnesisMorbi').value,
                        epicrisAnamnesisVitae: document.getElementById('epicrisAnamnesisVitae').value,
                        epicrisDiagnosis: document.getElementById('epicrisDiagnosis').value,
                        epicrisComorbidDiagnosis: document.getElementById('epicrisComorbidDiagnosis').value,
                        
                        // Status praesens эпикриза
                        epicrisTemperature: document.getElementById('epicrisTemperature').value,
                        epicrisHeight: document.getElementById('epicrisHeight').value,
                        epicrisWeight: document.getElementById('epicrisWeight').value,
                        epicrisCondition: document.getElementById('epicrisCondition').value,
                        epicrisConsciousness: document.getElementById('epicrisConsciousness').value,
                        epicrisBodyType: document.getElementById('epicrisBodyType').value,
                        epicrisNutrition: document.getElementById('epicrisNutrition').value,
                        epicrisSkin: document.getElementById('epicrisSkin').value,
                        epicrisMucous: document.getElementById('epicrisMucous').value,
                        epicrisEdema: document.getElementById('epicrisEdema').value,
                        epicrisLymphNodes: document.getElementById('epicrisLymphNodes').value,
                        epicrisThyroid: document.getElementById('epicrisThyroid').value,
                        epicrisMusculoskeletal: document.getElementById('epicrisMusculoskeletal').value,
                        
                        // Status localis эпикриза
                        epicrisKidneys: document.getElementById('epicrisKidneys').value,
                        epicrisKidneyPalpation: document.getElementById('epicrisKidneyPalpation').value,
                        epicrisKidneyPercussion: document.getElementById('epicrisKidneyPercussion').value,
                        epicrisBladder: document.getElementById('epicrisBladder').value,
                        epicrisUrination: document.getElementById('epicrisUrination').value,
                        epicrisDiuresis: document.getElementById('epicrisDiuresis').value,
                        epicrisGenitals: document.getElementById('epicrisGenitals').value,
                        epicrisProstate: document.getElementById('epicrisProstate').value,
                        
                        // Tekshiruvlar эпикриза
                        epicrisUTT: document.getElementById('epicrisUTT').value,
                        epicrisConclusion: document.getElementById('epicrisConclusion').value,
                        epicrisBloodTests: document.getElementById('epicrisBloodTests').value,
                        
                        // Davo va reja эпикриза
                        epicrisPlanned: document.getElementById('epicrisPlanned').value,
                        epicrisAnesthesia: document.getElementById('epicrisAnesthesia').value,
                        epicrisRecommendation: document.getElementById('epicrisRecommendation').value,
                        
                        // Imzolar эпикриза
                        epicrisAttendingDoctor: document.getElementById('epicrisAttendingDoctor').value,
                        epicrisHeadDoctor: document.getElementById('epicrisHeadDoctor').value,
                        epicrisDepartmentHead: document.getElementById('epicrisDepartmentHead').value,
                        epicrisAnesthesiologist: document.getElementById('epicrisAnesthesiologist').value,
                        epicrisDepartmentDoctor: document.getElementById('epicrisDepartmentDoctor').value
                    };
                    
                    // Форматирование дат
                    function formatDate(dateString) {
                        if (!dateString) return '';
                        const date = new Date(dateString);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}.${month}.${year}`;
                    }
                    
                    // Создание документа с использованием docx
                    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak } = docx;
                    
                    // Создание документа с двумя разделами
                    const doc = new Document({
                        sections: [
                            // Первый раздел: Бланк первичного осмотра
                            {
                                properties: {
                                    page: {
                                        margin: {
                                            top: 1000,
                                            right: 1000,
                                            bottom: 1000,
                                            left: 1000
                                        }
                                    }
                                },
                                children: [
                                    // Заголовок
                                    new Paragraph({
                                        text: "DAVOLOVCHI SHIFOKOR TOMONIDAN BO'LIM MUDIRI BILAN BIRGALIKDA BIRLAMCHI KO'RIK (ONKOUROLOGIYA)",
                                        heading: HeadingLevel.HEADING_1,
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 200 }
                                    }),
                                    
                                    // Дата и время
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Sana: ${formatDate(formData.examDate)}`,
                                                bold: true
                                            }),
                                            new TextRun({
                                                text: "\t\t\t\t\t\t\t\t\t\t\t",
                                            }),
                                            new TextRun({
                                                text: `Soat: ${formData.examTime}`,
                                                bold: true
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Информация о пациенте
                                    new Paragraph({
                                        text: "BEMOR MA'LUMOTLARI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bemor F.I.Sh.: ${formData.patientName}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `K.T. №: ${formData.patientId}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Kelgan kuni: ${formatDate(formData.arrivalDate)}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tug'ilgan yili: ${formatDate(formData.birthDate).substring(6)}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Yashash joyi: ${formData.address}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Шикоятлар
                                    new Paragraph({
                                        text: "SHIKOYATLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.complaints || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Анамнез морби
                                    new Paragraph({
                                        text: "ANAMNEZ MORBI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.anamnesisMorbi || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Анамнез витэ
                                    new Paragraph({
                                        text: "ANAMNEZ VITAE",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Epidemiologik anamnez: ${formData.epidemic || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Sil: ${formData.tuberculosis || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `OIV-infeksiyasi: ${formData.hiv || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Virusli gepatitlar: ${formData.hepatitis || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Sifilis: ${formData.syphilis || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `COVID-19 anamnezi: ${formData.covid || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Allergiyalar: ${formData.allergy || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Hamroh kasalliklar: ${formData.comorbidities || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Nasliy anamnez: ${formData.familyHistory || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Implantlar: ${formData.implants || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Jarrohlik amaliyotlari va jarohatlar: ${formData.surgeries || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Gemotransfuziya: ${formData.transfusions || ""}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Объективный осмотр
                                    new Paragraph({
                                        text: "OBYEKTIV KO'RIK",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tana harorati: ${formData.temperature || ""}. Bo'yi: ${formData.height || ""}. Vazni: ${formData.weight || ""}. Holati: ${formData.condition || ""}. Hush darajasi: ${formData.consciousness || ""}. Tana tuzilishi: ${formData.bodyType || ""}. Ovqatlanish: ${formData.nutrition || ""}. Teri qoplami: ${formData.skin || ""}. Ko'rinadigan shilliq pardalar: ${formData.mucous || ""}. Shishlar: ${formData.edema || ""}. Limfa tugunlari: ${formData.lymphNodes || ""}. Qalqonsimon bez: ${formData.thyroid || ""}. Skelet-mushak tizimi: ${formData.musculoskeletal || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Системы организма
                                    new Paragraph({
                                        text: "YURAK-QON TOMIR TIZIMI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Perkussiyada yurak chegaralari o'zgarmagan. Yurak tonlari: ${formData.heartSounds || ""}. Puls: ${formData.pulse || ""}. Yurak urishlar soni: ${formData.heartRate || ""}. Arterial bosim: ${formData.bloodPressure || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    new Paragraph({
                                        text: "NAFAS TIZIMI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Nafas olish soni: ${formData.respirationRate || ""}. Saturatsiya (SpO₂): ${formData.saturation || ""}. Auskultatsiya: ${formData.auscultation || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    new Paragraph({
                                        text: "OVQAT HAZM QILISH TIZIMI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Til: ${formData.tongue || ""}. Qorin: ${formData.abdomen || ""}. Qorin pardasi tirnash belgilari: ${formData.peritonealSigns || ""}. Jigar: ${formData.liver || ""}. Taloq: ${formData.spleen || ""}. Ichak faoliyati (so'ziga ko'ra): ${formData.bowelFunction || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    new Paragraph({
                                        text: "SIYDIK-JINSIY TIZIMI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Buyraklar: palpatsiyada aniqlanmaydi. Ular sohasida palpatsiya: ${formData.kidneyPalpation || ""}. Bel sohasiga urish: ${formData.kidneyPercussion || ""}. Siydik pufagi: palpatsiyada aniqlanmaydi. Siyish: ${formData.urination || ""}. Diurez: ${formData.diuresis || ""}. Jinsiy a'zolar: ${formData.genitals || ""}. Prostata bezi (PR): ${formData.prostate || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Диагноз
                                    new Paragraph({
                                        text: "TASHXIS",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.diagnosis,
                                                bold: true
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Hamroh kasalliklar: ${formData.comorbidDiagnosis || ""}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // План обследования
                                    new Paragraph({
                                        text: "TEKSHIRUV REJASI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.examinationPlan || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Обоснование назначений
                                    new Paragraph({
                                        text: "TAYINLAMLARNING ASOSLANTRILISHI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.prescriptionBasis || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Согласие и подписи (ПЕРВЫЙ ЛИСТ)
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Shaxsiy ma'lumotlar va tibbiy aralashuvga rozilik: ${formData.consent || ""}`,
                                            })
                                        ],
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim rahbari: ${formData.headDoctor || ""}`,
                                            }),
                                            new TextRun({
                                                text: "\t\t\t\t\t\t\t",
                                            }),
                                            new TextRun({
                                                text: `Bo'lim mudiri: ${formData.departmentHead || ""}`,
                                            }),
                                            new TextRun({
                                                text: "\t\t\t\t\t\t\t",
                                            }),
                                            new TextRun({
                                                text: `Davolovchi shifokor: ${formData.attendingDoctor || ""}`,
                                            })
                                        ],
                                        spacing: { before: 400 }
                                    }),
                                ]
                            },
                            // Второй раздел: Консилиум (новая страница)
                            {
                                properties: {
                                    page: {
                                        margin: {
                                            top: 1000,
                                            right: 1000,
                                            bottom: 1000,
                                            left: 1000
                                        }
                                    }
                                },
                                children: [
                                    new Paragraph({
                                        text: "SHIFOKORLAR KONSILIUMI",
                                        heading: HeadingLevel.HEADING_1,
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 300 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Konsilium sanasi: ${formatDate(formData.consiliumDate)}`,
                                                bold: true
                                            })
                                        ],
                                        spacing: { after: 200 }
                                    }),
                                    
                                    // Информация о пациенте
                                    new Paragraph({
                                        text: "BEMOR MA'LUMOTLARI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bemor F.I.Sh.: ${formData.consiliumPatientName || formData.patientName}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `K.T. №: ${formData.consiliumPatientId || formData.patientId}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Kelgan kuni: ${formatDate(formData.consiliumArrivalDate || formData.arrivalDate)}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tug'ilgan yili: ${formatDate(formData.consiliumBirthDate || formData.birthDate).substring(6)}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Yashash joyi: ${formData.consiliumAddress || formData.address}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Шикоятлар
                                    new Paragraph({
                                        text: "SHIKOYATLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.consiliumComplaints || formData.complaints || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Анамнез морби
                                    new Paragraph({
                                        text: "ANAMNEZ MORBI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.consiliumAnamnesisMorbi || formData.anamnesisMorbi || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Анамнез витэ
                                    new Paragraph({
                                        text: "ANAMNEZ VITAE",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.consiliumAnamnesisVitae || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Status praesens (теперь из отдельных полей)
                                    new Paragraph({
                                        text: "STATUS PRAESENS",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tana harorati: ${formData.consiliumTemperature || ""}. Bo'yi: ${formData.consiliumHeight || ""}. Vazni: ${formData.consiliumWeight || ""}. Holati: ${formData.consiliumCondition || ""}. Hush darajasi: ${formData.consiliumConsciousness || ""}. Tana tuzilishi: ${formData.consiliumBodyType || ""}. Ovqatlanish: ${formData.consiliumNutrition || ""}. Teri qoplami: ${formData.consiliumSkin || ""}. Ko'rinadigan shilliq pardalar: ${formData.consiliumMucous || ""}. Shishlar: ${formData.consiliumEdema || ""}. Limfa tugunlari: ${formData.consiliumLymphNodes || ""}. Qalqonsimon bez: ${formData.consiliumThyroid || ""}. Skelet-mushak tizimi: ${formData.consiliumMusculoskeletal || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Status localis (теперь из отдельных полей)
                                    new Paragraph({
                                        text: "STATUS LOCALIS",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Buyraklar: ${formData.consiliumKidneys || ""}. Ular sohasida palpatsiya: ${formData.consiliumKidneyPalpation || ""}. Bel sohasiga urish: ${formData.consiliumKidneyPercussion || ""}. Siydik pufagi: ${formData.consiliumBladder || ""}. Siyish: ${formData.consiliumUrination || ""}. Diurez: ${formData.consiliumDiuresis || ""}. Jinsiy a'zolar: ${formData.consiliumGenitals || ""}. Prostata bezi (PR): ${formData.consiliumProstate || ""}.`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Техширувлар (теперь из отдельных полей)
                                    new Paragraph({
                                        text: "TEKSHIRUVLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `EKG: ${formData.consiliumEKG || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Qon taxlillari: ${formData.consiliumBloodTests || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Boshqa tekshiruvlar: ${formData.consiliumOtherTests || ""}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Диагноз (остается textarea)
                                    new Paragraph({
                                        text: "TASHXIS",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.consiliumTashxis || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Консилиум карори (остается textarea)
                                    new Paragraph({
                                        text: "KONSILIUM QARORI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.consiliumDecision || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Участники консилиума
                                    new Paragraph({
                                        text: "KONSILIUM ISHTIROKCHILARI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim rahbari: ${formData.consiliumHeadDoctor || formData.headDoctor || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim mudiri: ${formData.consiliumDepartmentHead || formData.departmentHead || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Kimyoterapiya bo'limi mudiri: ${formData.consiliumChemotherapyHead || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Davolovchi shifokor: ${formData.consiliumAttendingDoctor || formData.attendingDoctor || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim shifokori: ${formData.consiliumDepartmentDoctor || ""}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                ]
                            },
                            {
                                // ТРЕТИЙ ЛИСТ: ЭПИКРИЗ ПЕРЕД ОПЕРАЦИЕЙ
                                pageBreakBefore: true,
                                children: [
                                    new Paragraph({
                                        text: "JARROHLIK AMALIYOTI OLDI EPIKRIZ",
                                        heading: HeadingLevel.HEADING_1,
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 300 }
                                    }),
                                    
                                    // Паспортная часть
                                    new Paragraph({
                                        text: "BEMOR MA'LUMOTLARI",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bemor F.I.Sh.: ${formData.epicrisPatientName || formData.patientName}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `K.T. №: ${formData.epicrisPatientId || formData.patientId}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Kelgan kuni: ${formatDate(formData.epicrisArrivalDate || formData.arrivalDate)}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tug'ilgan yili: ${formatDate(formData.epicrisBirthDate || formData.birthDate)}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Yashash joyi: ${formData.epicrisAddress || formData.address}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Диагнозы
                                    new Paragraph({
                                        text: "TASHXISLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tashxis: ${formData.epicrisDiagnosis || formData.diagnosis}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Hamroh kasalliklar: ${formData.epicrisComorbidDiagnosis || formData.comorbidDiagnosis}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Жалобы
                                    new Paragraph({
                                        text: "SHIKOYATLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formData.epicrisComplaints || formData.complaints || "",
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Анамнез
                                    new Paragraph({
                                        text: "ANAMNEZ",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Anamnesis morbi: ${formData.epicrisAnamnesisMorbi || formData.anamnesisMorbi}`,
                                            })
                                        ],
                                        spacing: { after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Anamnesis vitae: ${formData.epicrisAnamnesisVitae || formData.anamnesisVitae}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Объективный статус
                                    new Paragraph({
                                        text: "OBYEKTIV STATUS",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Status praesens:`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tana harorati: ${formData.epicrisTemperature || formData.temperature}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'yi: ${formData.epicrisHeight || formData.height}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Vazni: ${formData.epicrisWeight || formData.weight}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Holati: ${formData.epicrisCondition || formData.condition}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Hush darajasi: ${formData.epicrisConsciousness || formData.consciousness}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tana tuzilishi: ${formData.epicrisBodyType || formData.bodyType}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Ovqatlanish: ${formData.epicrisNutrition || formData.nutrition}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Teri qoplami: ${formData.epicrisSkin || formData.skin}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Ko'rinadigan shilliq pardalar: ${formData.epicrisMucous || formData.mucous}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Shishlar: ${formData.epicrisEdema || formData.edema}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Limfa tugunlari: ${formData.epicrisLymphNodes || formData.lymphNodes}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Qalqonsimon bez: ${formData.epicrisThyroid || formData.thyroid}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Skelet-mushak tizimi: ${formData.epicrisMusculoskeletal || formData.musculoskeletal}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Локальный статус
                                    new Paragraph({
                                        text: "LOKAL STATUS",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Status localis:`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Buyraklar: ${formData.epicrisKidneys || formData.consiliumKidneys}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Ular sohasida palpatsiya: ${formData.epicrisKidneyPalpation || formData.consiliumKidneyPalpation}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bel sohasiga urish: ${formData.epicrisKidneyPercussion || formData.consiliumKidneyPercussion}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Siydik pufagi: ${formData.epicrisBladder || formData.consiliumBladder}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Siyish: ${formData.epicrisUrination || formData.consiliumUrination}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Diurez: ${formData.epicrisDiuresis || formData.consiliumDiuresis}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Jinsiy a'zolar: ${formData.epicrisGenitals || formData.consiliumGenitals}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Prostata bezi (PR): ${formData.epicrisProstate || formData.consiliumProstate}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Обследования
                                    new Paragraph({
                                        text: "TEKSHIRUVLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tekshiruvlar:`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `UTT: ${formData.epicrisUTT || formData.consiliumOtherTests}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Xulosa: ${formData.epicrisConclusion}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Qon tahlillari: ${formData.epicrisBloodTests || formData.consiliumBloodTests}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Лечение и план
                                    new Paragraph({
                                        text: "DAVO VA REJA",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Rejalashtirildi: ${formData.epicrisPlanned}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Og'riqsizlantirish usuli: ${formData.epicrisAnesthesia}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Tavsiya: ${formData.epicrisRecommendation}`,
                                            })
                                        ],
                                        spacing: { after: 400 }
                                    }),
                                    
                                    // Подписи
                                    new Paragraph({
                                        text: "IMZOLAR",
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { before: 200, after: 200 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Dav.shifokor: ${formData.epicrisAttendingDoctor || formData.attendingDoctor}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim raxbari: ${formData.epicrisHeadDoctor || formData.headDoctor}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim mudiri: ${formData.epicrisDepartmentHead || formData.departmentHead}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Anesteziolog: ${formData.epicrisAnesthesiologist}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    }),
                                    
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `Bo'lim shifokori: ${formData.epicrisDepartmentDoctor || formData.consiliumDepartmentDoctor}`,
                                            })
                                        ],
                                        spacing: { after: 100 }
                                    })
                                ]
                            }
                        ]
                    });
                    
                    // Генерация файла
                    const blob = await Packer.toBlob(doc);
                    
                    // Сохранение файла
                    const fileName = `Birlamchi_ko'rik_konsilium_epikriz_${formData.patientName.replace(/\s+/g, '_')}_${formatDate(formData.examDate)}.docx`;
                    saveAs(blob, fileName);
                    
                    showStatus(`Hujjat muvaffaqiyatli saqlandi: ${fileName}`, true);
                    
                } catch (error) {
                    console.error('Xatolik:', error);
                    showStatus('Hujjatni saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.', false);
                }
            });
            
        });
