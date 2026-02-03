/*
    script.js
    - Handles UI interactions for the medical form application:
        * Fill example data (uses fictional placeholder data only)
        * Reset the form
        * Validate required fields
        * Generate a DOCX report using docx + FileSaver
    NOTE: All autofill/example values are intentionally fictional and not real personal data.
*/
document.addEventListener('DOMContentLoaded', function() {
    // UI control references
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const fillExampleBtn = document.getElementById('fillExampleBtn');
    const statusMessage = document.getElementById('statusMessage');

    // Fill form with fictional example data (click handler)
    fillExampleBtn.addEventListener('click', function() {
        if (confirm('Fill the form with example (fictional) data? This will overwrite current inputs.')) {
            fillExampleData();
            showStatus('Example data filled', true);
        }
    });

    // Fill the form with NON-PERSONAL, fictional example data.
    function fillExampleData() {
        // Basic patient info (first page)
        document.getElementById('examDate').value = '2026-01-16';
        document.getElementById('examTime').value = '16:43';
        document.getElementById('patientName').value = 'Example Patient';
        document.getElementById('patientId').value = '0000';
        document.getElementById('arrivalDate').value = '2026-01-16';
        document.getElementById('birthDate').value = '1970-01-01';
        document.getElementById('address').value = '123 Example St, Example City, Country';

        // Complaints (fictional)
        document.getElementById('complaints').value = 'Example complaint: intermittent flank pain and general malaise.';

        // Anamnesis morbi (fictional)
        document.getElementById('anamnesisMorbi').value = 'Symptoms started several months ago; patient consulted a local clinic and was referred for diagnostics.';

        // Anamnesis vitae and background (non-personal placeholders)
        document.getElementById('epidemic').value = 'No';
        document.getElementById('tuberculosis').value = 'No';
        document.getElementById('hiv').value = 'No';
        document.getElementById('hepatitis').value = 'No';
        document.getElementById('syphilis').value = 'No';
        document.getElementById('covid').value = 'No';
        document.getElementById('allergy').value = 'No known drug allergies';
        document.getElementById('comorbidities').value = 'Example comorbidity: chronic cholecystitis';
        document.getElementById('familyHistory').value = 'Non-contributory';
        document.getElementById('implants').value = 'None';
        document.getElementById('surgeries').value = 'None';
        document.getElementById('transfusions').value = 'None';

        // Objective exam (fictional values)
        document.getElementById('temperature').value = '36.6°C';
        document.getElementById('height').value = '170 cm';
        document.getElementById('weight').value = '75 kg';
        document.getElementById('condition').value = 'stable';
        document.getElementById('consciousness').value = 'clear, oriented';
        document.getElementById('bodyType').value = 'average';
        document.getElementById('nutrition').value = 'adequate';
        document.getElementById('skin').value = 'normal';
        document.getElementById('mucous').value = 'normal';
        document.getElementById('edema').value = 'none';
        document.getElementById('lymphNodes').value = 'not enlarged';
        document.getElementById('thyroid').value = 'normal';
        document.getElementById('musculoskeletal').value = 'unremarkable';

        // Cardiovascular system
        document.getElementById('heartSounds').value = 'clear';
        document.getElementById('pulse').value = '72';
        document.getElementById('heartRate').value = '72';
        document.getElementById('bloodPressure').value = '120/80';

        // Respiratory system
        document.getElementById('respirationRate').value = '16';
        document.getElementById('saturation').value = '98%';
        document.getElementById('auscultation').value = 'vesicular breath sounds';

        // Digestive system
        document.getElementById('tongue').value = 'moist, normal';
        document.getElementById('abdomen').value = 'soft, non-tender';
        document.getElementById('peritonealSigns').value = 'none';
        document.getElementById('liver').value = 'not palpable';
        document.getElementById('spleen').value = 'not palpable';
        document.getElementById('bowelFunction').value = 'normal'

        // Genitourinary system
        document.getElementById('kidneyPalpation').value = 'no palpable masses';
        document.getElementById('kidneyPercussion').value = 'non-tender';
        document.getElementById('urination').value = 'normal';
        document.getElementById('diuresis').value = 'adequate';
        document.getElementById('genitals').value = 'normal';
        document.getElementById('prostate').value = 'not enlarged';

        // Diagnosis and planning (generic placeholders)
        document.getElementById('diagnosis').value = 'Example diagnosis: renal mass (to be evaluated)';
        document.getElementById('comorbidDiagnosis').value = 'Example comorbidity: chronic cholecystitis';

        document.getElementById('examinationPlan').value = '1. CT scan\n2. Biopsy if indicated\n3. Blood and urine tests\n4. ECG\n5. Chest X-ray';
        document.getElementById('prescriptionBasis').value = 'Recommendations based on clinical findings. Use fictional text only.';

        // CONSILIUM (use fictional placeholders, no real names)
        document.getElementById('consiliumDate').value = '2026-01-19';
        document.getElementById('consiliumPatientName').value = 'Example Patient';
        document.getElementById('consiliumPatientId').value = '0000';
        document.getElementById('consiliumArrivalDate').value = '2026-01-16';
        document.getElementById('consiliumBirthDate').value = '1970-01-01';
        document.getElementById('consiliumAddress').value = '123 Example St, Example City, Country';
        document.getElementById('consiliumComplaints').value = document.getElementById('complaints').value;
        document.getElementById('consiliumAnamnesisMorbi').value = document.getElementById('anamnesisMorbi').value;
        document.getElementById('consiliumAnamnesisVitae').value = 'Non-personal sample anamnesis text.';

        // STATUS PRAESENS (fictional defaults)
        document.getElementById('consiliumTemperature').value = '36.6°C';
        document.getElementById('consiliumHeight').value = '170 cm';
        document.getElementById('consiliumWeight').value = '75 kg';
        document.getElementById('consiliumCondition').value = 'stable';
        document.getElementById('consiliumConsciousness').value = 'clear, oriented';
        document.getElementById('consiliumBodyType').value = 'average';
        document.getElementById('consiliumNutrition').value = 'adequate';
        document.getElementById('consiliumSkin').value = 'normal';
        document.getElementById('consiliumMucous').value = 'normal';
        document.getElementById('consiliumEdema').value = 'none';
        document.getElementById('consiliumLymphNodes').value = 'not enlarged';
        document.getElementById('consiliumThyroid').value = 'normal';
        document.getElementById('consiliumMusculoskeletal').value = 'unremarkable';

        // STATUS LOCALIS (fictional defaults)
        document.getElementById('consiliumKidneys').value = 'not palpable';
        document.getElementById('consiliumKidneyPalpation').value = 'no focal tenderness';
        document.getElementById('consiliumKidneyPercussion').value = 'non-tender';
        document.getElementById('consiliumBladder').value = 'not palpable';
        document.getElementById('consiliumUrination').value = 'normal';
        document.getElementById('consiliumDiuresis').value = 'adequate';
        document.getElementById('consiliumGenitals').value = 'normal';
        document.getElementById('consiliumProstate').value = 'not enlarged';

        // TESTS (fictional descriptions)
        document.getElementById('consiliumEKG').value = 'Sinus rhythm, normal rate.';
        document.getElementById('consiliumBloodTests').value = 'Standard CBC and chemistry results (fictional values).';
        document.getElementById('consiliumOtherTests').value = 'Ultrasound: example finding of a solid renal lesion.';

        // CONSILIUM TEXTS (non-personal defaults)
        document.getElementById('consiliumTashxis').value = 'Example: findings suggest a renal lesion that requires further evaluation.';
        document.getElementById('consiliumDecision').value = 'Example decision: plan diagnostic workup and consider surgical consultation. Patient informed (fictional).';

        // CONSILIUM PARTICIPANTS -- generic placeholders
        document.getElementById('consiliumHeadDoctor').value = 'Dr. Head Doctor';
        document.getElementById('consiliumDepartmentHead').value = 'Dr. Department Head';
        document.getElementById('consiliumChemotherapyHead').value = 'Dr. Chemotherapy Head';
        document.getElementById('consiliumAttendingDoctor').value = 'Dr. Attending Doctor';
        document.getElementById('consiliumDepartmentDoctor').value = 'Dr. Department Doctor';

        // EPIKRIZ (third page) -- use generic placeholders as well
        document.getElementById('epicrisPatientName').value = 'Example Patient';
        document.getElementById('epicrisPatientId').value = '0000';
        document.getElementById('epicrisArrivalDate').value = '2026-01-16';
        document.getElementById('epicrisBirthDate').value = '1970-01-01';
        document.getElementById('epicrisAddress').value = '123 Example St, Example City, Country';

        document.getElementById('epicrisComplaints').value = document.getElementById('complaints').value;
        document.getElementById('epicrisAnamnesisMorbi').value = document.getElementById('anamnesisMorbi').value;
        document.getElementById('epicrisAnamnesisVitae').value = 'Non-personal sample anamnesis text.';

        document.getElementById('epicrisDiagnosis').value = 'Example diagnosis: renal lesion (to evaluate)';
        document.getElementById('epicrisComorbidDiagnosis').value = 'Example comorbidity: chronic cholecystitis';

        // EPIKRIZ status and tests
        document.getElementById('epicrisTemperature').value = '36.6°C';
        document.getElementById('epicrisHeight').value = '170 cm';
        document.getElementById('epicrisWeight').value = '75 kg';
        document.getElementById('epicrisCondition').value = 'stable';
        document.getElementById('epicrisConsciousness').value = 'clear, oriented';
        document.getElementById('epicrisBodyType').value = 'average';
        document.getElementById('epicrisNutrition').value = 'adequate';
        document.getElementById('epicrisSkin').value = 'normal';
        document.getElementById('epicrisMucous').value = 'normal';
        document.getElementById('epicrisEdema').value = 'none';
        document.getElementById('epicrisLymphNodes').value = 'not enlarged';
        document.getElementById('epicrisThyroid').value = 'normal';
        document.getElementById('epicrisMusculoskeletal').value = 'unremarkable';

        document.getElementById('epicrisKidneys').value = 'not palpable';
        document.getElementById('epicrisKidneyPalpation').value = 'no focal tenderness';
        document.getElementById('epicrisKidneyPercussion').value = 'non-tender';
        document.getElementById('epicrisBladder').value = 'not palpable';
        document.getElementById('epicrisUrination').value = 'normal';
        document.getElementById('epicrisDiuresis').value = 'adequate';
        document.getElementById('epicrisGenitals').value = 'normal';
        document.getElementById('epicrisProstate').value = 'not enlarged';

        document.getElementById('epicrisUTT').value = 'Example ultrasound description: solid lesion in the kidney.';
        document.getElementById('epicrisConclusion').value = 'Example conclusion: further evaluation recommended.';
        document.getElementById('epicrisBloodTests').value = 'Example lab results: fictional values.';

        document.getElementById('epicrisPlanned').value = 'Example planned procedure: diagnostic or therapeutic intervention';
        document.getElementById('epicrisAnesthesia').value = 'General anesthesia (example)';
        document.getElementById('epicrisRecommendation').value = 'Postoperative monitoring and standard prophylaxis (example)';

        // EPIKRIZ signatures - generic
        document.getElementById('epicrisAttendingDoctor').value = 'Dr. Attending Doctor';
        document.getElementById('epicrisHeadDoctor').value = 'Dr. Head Doctor';
        document.getElementById('epicrisDepartmentHead').value = 'Dr. Department Head';
        document.getElementById('epicrisAnesthesiologist').value = 'Dr. Anesthesiologist';
        document.getElementById('epicrisDepartmentDoctor').value = 'Dr. Department Doctor';
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
                    
                    // Restore default (non-personal) placeholders for first page signatures
                    document.getElementById('consent').value = 'Received.';
                    document.getElementById('headDoctor').value = 'Dr. Head Doctor';
                    document.getElementById('departmentHead').value = 'Dr. Department Head';
                    document.getElementById('attendingDoctor').value = 'Dr. Attending Doctor';
                    
                    // Restore default placeholders for consilium
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
                    
                    // Restore default (non-personal) placeholders for consilium participants
                    document.getElementById('consiliumHeadDoctor').value = 'Dr. Head Doctor';
                    document.getElementById('consiliumDepartmentHead').value = 'Dr. Department Head';
                    document.getElementById('consiliumChemotherapyHead').value = 'Dr. Chemotherapy Head';
                    document.getElementById('consiliumAttendingDoctor').value = 'Dr. Attending Doctor';
                    document.getElementById('consiliumDepartmentDoctor').value = 'Dr. Department Doctor';
                    
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
                        
                        // Consilium data (fictional by default)
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
                        
                        // Epicrisis data (third page)
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
                            // First section: Primary exam form
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
                                    
                                    // Consent and signatures (FIRST PAGE)
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
                            // Second section: Consilium (new page)
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
                                // Third page: Epicrisis before surgery
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
                                    
                                    // Signatures (epicrisis)
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
