document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    let content = '';

    switch (searchQuery) {
        case 'liver':
            content = `
                <h2>How the Liver Works</h2>
                <p>The liver is a vital organ that performs over 500 functions essential to maintaining the body's health. It processes nutrients absorbed from the digestive tract, converting them into substances the body can use. The liver also produces bile, a substance that aids in digesting fats, and detoxifies harmful chemicals, metabolizing drugs and alcohol. It plays a crucial role in regulating blood sugar levels, synthesizing proteins, and producing cholesterol.</p>
                <p>The liver is divided into two main lobes, each made up of small units called lobules. Blood from the digestive tract flows into the liver via the portal vein, allowing the liver to metabolize nutrients before they enter the systemic circulation. Hepatocytes, the primary liver cells, are responsible for most of the liver's functions. The liver also contains Kupffer cells, which play a vital role in the immune response by breaking down pathogens and dead cells.</p>
                
                <h2>Liver Diseases</h2>
                <ul>
                    <li>
                        <strong>Hepatitis:</strong>
                        <p>This inflammation of the liver can be caused by viral infections (such as Hepatitis A, B, and C), alcohol abuse, and certain medications. Symptoms can include jaundice, fatigue, and abdominal pain.</p>
                        <p><em>Prevention:</em> Vaccination, safe sex practices, and avoiding sharing needles.</p>
                    </li>
                    <li>
                        <strong>Cirrhosis:</strong>
                        <p>This is severe scarring of the liver often resulting from chronic liver disease, including hepatitis and alcohol abuse. Symptoms may include swelling in the legs and abdomen, weakness, and confusion.</p>
                        <p><em>Prevention:</em> Avoid excessive alcohol consumption, maintain a healthy weight, and manage conditions like diabetes.</p>
                    </li>
                    <li>
                        <strong>Fatty Liver Disease:</strong>
                        <p>Characterized by fat accumulation in liver cells, this condition is often linked to obesity, diabetes, and high cholesterol. It can lead to inflammation and scarring.</p>
                        <p><em>Prevention:</em> A healthy diet rich in fruits, vegetables, and whole grains, regular physical activity, and weight management are crucial.</p>
                    </li>
                </ul>

                <h2>Diet for Liver Health</h2>
                <p>A balanced diet is essential for liver health. Include:</p>
                <ul>
                    <li><strong>Fruits and Vegetables:</strong> Rich in vitamins, minerals, and antioxidants that help combat oxidative stress.</li>
                    <li><strong>Whole Grains:</strong> Such as brown rice and oats, which provide fiber and help regulate blood sugar levels.</li>
                    <li><strong>Lean Proteins:</strong> Fish, poultry, and legumes help maintain muscle mass without overloading the liver with fat.</li>
                    <li><strong>Healthy Fats:</strong> Sources like avocados, nuts, and olive oil are beneficial for heart and liver health.</li>
                </ul>

                <h2>General Tips</h2>
                <p>To maintain a healthy liver:</p>
                <ul>
                    <li>Stay hydrated by drinking plenty of water.</li>
                    <li>Exercise regularly to help maintain a healthy weight.</li>
                    <li>Avoid excessive alcohol consumption and illicit drugs.</li>
                    <li>Get regular check-ups to monitor liver function, especially if you have risk factors.</li>
                </ul>
            `;
            break;

        case 'lungs':
            content = `
                <h2>How the Lungs Work</h2>
                <p>The lungs are essential organs for respiration, responsible for gas exchange in the body. They allow oxygen from the air to enter the bloodstream while removing carbon dioxide, a waste product of metabolism. The lungs consist of several lobes: the right lung has three lobes, while the left lung has two, making room for the heart.</p>
                <p>Air enters through the nose or mouth and travels down the trachea, which divides into two bronchi, each leading to one lung. Inside the lungs, the bronchi branch into smaller bronchioles, ending in tiny air sacs called alveoli. The alveoli are surrounded by capillaries, where the exchange of oxygen and carbon dioxide occurs. This process is essential for maintaining the body’s acid-base balance and providing oxygen for cellular functions.</p>
                
                <h2>Lung Diseases</h2>
                <ul>
                    <li>
                        <strong>Asthma:</strong>
                        <p>A chronic condition characterized by inflamed airways, leading to wheezing, shortness of breath, and coughing. It can be triggered by allergens, exercise, and respiratory infections.</p>
                        <p><em>Prevention:</em> Avoid known triggers, maintain a clean environment, and use inhalers as prescribed.</p>
                    </li>
                    <li>
                        <strong>Chronic Obstructive Pulmonary Disease (COPD):</strong>
                        <p>A progressive disease that makes it hard to breathe due to lung damage, often caused by smoking or exposure to pollutants. Symptoms include chronic cough, sputum production, and difficulty breathing.</p>
                        <p><em>Prevention:</em> Quit smoking, avoid secondhand smoke, and limit exposure to air pollutants.</p>
                    </li>
                    <li>
                        <strong>Pneumonia:</strong>
                        <p>An infection that inflames the air sacs in the lungs, which may fill with fluid or pus, causing cough, fever, and difficulty breathing.</p>
                        <p><em>Prevention:</em> Vaccination, practicing good hygiene, and avoiding close contact with sick individuals.</p>
                    </li>
                </ul>

                <h2>Diet for Lung Health</h2>
                <p>A healthy diet can support lung function:</p>
                <ul>
                    <li><strong>Fruits and Vegetables:</strong> Especially those high in antioxidants, such as berries, citrus fruits, and leafy greens.</li>
                    <li><strong>Omega-3 Fatty Acids:</strong> Found in fatty fish, flaxseeds, and walnuts, which can reduce inflammation.</li>
                    <li><strong>Whole Grains:</strong> Such as brown rice and quinoa, which provide essential nutrients.</li>
                    <li><strong>Hydration:</strong> Drinking plenty of water keeps mucus thin and supports respiratory function.</li>
                </ul>

                <h2>General Tips</h2>
                <p>To keep your lungs healthy:</p>
                <ul>
                    <li>Avoid smoking and secondhand smoke.</li>
                    <li>Engage in regular physical activity to improve lung capacity.</li>
                    <li>Practice deep breathing exercises to enhance lung function.</li>
                    <li>Keep indoor air clean by using air purifiers and ensuring proper ventilation.</li>
                </ul>
            `;
            break;

        case 'kidney':
            content = `
                <h2>How the Kidneys Work</h2>
                <p>The kidneys are two bean-shaped organs located on either side of the spine, responsible for filtering blood and producing urine. They play a vital role in regulating fluid balance, electrolytes, and blood pressure, as well as maintaining acid-base balance. Each kidney contains about a million nephrons, the functional units that filter blood and remove waste products.</p>
                <p>As blood flows through the kidneys, waste and excess fluids are filtered out in the nephrons, while essential substances are reabsorbed back into the bloodstream. The resulting urine is collected in the renal pelvis and transported to the bladder for excretion. The kidneys also produce hormones that regulate blood pressure (renin) and stimulate the production of red blood cells (erythropoietin).</p>
                
                <h2>Kidney Diseases</h2>
                <ul>
                    <li>
                        <strong>Chronic Kidney Disease (CKD):</strong>
                        <p>A gradual loss of kidney function, often due to diabetes or hypertension. Early stages may have no symptoms, but it can lead to kidney failure.</p>
                        <p><em>Prevention:</em> Manage blood pressure and diabetes, stay hydrated, and avoid NSAIDs.</p>
                    </li>
                    <li>
                        <strong>Kidney Stones:</strong>
                        <p>Hard deposits formed from minerals and salts that can cause severe pain when passing through the urinary tract.</p>
                        <p><em>Prevention:</em> Drink plenty of fluids, limit salt intake, and consume a balanced diet.</p>
                    </li>
                    <li>
                        <strong>Glomerulonephritis:</strong>
                        <p>Inflammation of the kidney’s filtering units, which can lead to kidney damage and high blood pressure.</p>
                        <p><em>Prevention:</em> Treat infections promptly and manage chronic conditions.</p>
                    </li>
                </ul>

                <h2>Diet for Kidney Health</h2>
                <p>A kidney-friendly diet includes:</p>
                <ul>
                    <li><strong>Lean Proteins:</strong> Such as chicken, fish, and plant-based proteins to minimize stress on the kidneys.</li>
                    <li><strong>Low-Sodium Foods:</strong> To help control blood pressure and reduce fluid retention.</li>
                    <li><strong>Fruits and Vegetables:</strong> Especially those low in potassium if advised by a healthcare provider.</li>
                    <li><strong>Hydration:</strong> Drinking adequate water is crucial for kidney function.</li>
                </ul>

                <h2>General Tips</h2>
                <p>To maintain kidney health:</p>
                <ul>
                    <li>Regularly monitor blood pressure and blood sugar levels.</li>
                    <li>Engage in regular exercise to maintain a healthy weight.</li>
                    <li>Avoid excessive use of over-the-counter painkillers.</li>
                    <li>Limit alcohol consumption and avoid smoking.</li>
                </ul>
            `;
            break;

        case 'stomach':
            content = `
                <h2>How the Stomach Works</h2>
                <p>The stomach is a hollow organ that holds food while it is being mixed with stomach enzymes and acids. The stomach's strong muscular walls contract to churn food and mix it with digestive juices, breaking it down into a semi-liquid form called chyme. The stomach also serves as a temporary storage site for food, allowing for gradual release into the small intestine for further digestion and nutrient absorption.</p>
                <p>The stomach lining is protected by a thick layer of mucus, preventing damage from the acidic environment. The secretion of gastric acid (hydrochloric acid) helps in breaking down food and killing harmful bacteria. Additionally, the stomach produces intrinsic factor, a protein essential for vitamin B12 absorption.</p>
                
                <h2>Stomach Diseases</h2>
                <ul>
                    <li>
                        <strong>Gastritis:</strong>
                        <p>This condition involves inflammation of the stomach lining, which can cause pain, nausea, and vomiting. It can be caused by excessive alcohol consumption, stress, or bacterial infections.</p>
                        <p><em>Prevention:</em> Avoid irritants like alcohol, manage stress, and maintain a balanced diet.</p>
                    </li>
                    <li>
                        <strong>Peptic Ulcers:</strong>
                        <p>Sores that develop on the lining of the stomach or the first part of the small intestine. They can cause pain, bloating, and indigestion.</p>
                        <p><em>Prevention:</em> Avoid NSAIDs and manage stress through relaxation techniques.</p>
                    </li>
                    <li>
                        <strong>Gastroesophageal Reflux Disease (GERD):</strong>
                        <p>A chronic digestive condition where stomach acid flows back into the esophagus, causing heartburn and discomfort.</p>
                        <p><em>Prevention:</em> Avoid trigger foods, eat smaller meals, and maintain a healthy weight.</p>
                    </li>
                </ul>

                <h2>Diet for Stomach Health</h2>
                <p>A stomach-friendly diet includes:</p>
                <ul>
                    <li><strong>Fiber-Rich Foods:</strong> Such as fruits, vegetables, and whole grains to support digestion.</li>
                    <li><strong>Lean Proteins:</strong> Fish, poultry, and legumes that are easier to digest.</li>
                    <li><strong>Probiotics:</strong> Found in yogurt and fermented foods, which can promote gut health.</li>
                    <li><strong>Hydration:</strong> Drinking plenty of water helps in digestion and nutrient absorption.</li>
                </ul>

                <h2>General Tips</h2>
                <p>To maintain a healthy stomach:</p>
                <ul>
                    <li>Eat smaller, more frequent meals to ease digestion.</li>
                    <li>Avoid lying down immediately after eating to prevent reflux.</li>
                    <li>Manage stress through relaxation techniques such as yoga and meditation.</li>
                    <li>Seek medical advice for persistent digestive issues.</li>
                </ul>
            `;
            break;

        case 'heart':
            content = `
                <h2>How the Heart Works</h2>
                <p>The heart is a muscular organ about the size of a fist, located slightly left of the center of the chest. It functions as the body’s pump, circulating blood throughout the circulatory system. The heart has four chambers: two upper chambers called atria and two lower chambers known as ventricles. Oxygen-poor blood returns to the right atrium, is pumped into the right ventricle, and sent to the lungs to receive oxygen. Oxygen-rich blood returns to the left atrium, moves into the left ventricle, and is pumped out to the body.</p>
                <p>The heart's pumping action is controlled by electrical impulses that trigger each heartbeat. The sinoatrial (SA) node, located in the right atrium, serves as the heart's natural pacemaker, regulating the rhythm of heartbeats. The heart also requires a constant supply of oxygen-rich blood, delivered by the coronary arteries.</p>
                
                <h2>Heart Diseases</h2>
                <ul>
                    <li>
                        <strong>Coronary Artery Disease:</strong>
                        <p>This is caused by the buildup of plaque in the coronary arteries, reducing blood flow to the heart muscle and leading to chest pain or heart attacks.</p>
                        <p><em>Prevention:</em> Maintain a healthy diet, exercise regularly, and manage risk factors like hypertension and diabetes.</p>
                    </li>
                    <li>
                        <strong>Heart Failure:</strong>
                        <p>A condition where the heart cannot pump enough blood to meet the body's needs. It can result from various conditions, including high blood pressure and coronary artery disease.</p>
                        <p><em>Prevention:</em> Regular exercise, a healthy diet, and monitoring chronic conditions are essential.</p>
                    </li>
                    <li>
                        <strong>Arrhythmia:</strong>
                        <p>Irregular heartbeats that can be harmless or life-threatening, depending on their severity and duration.</p>
                        <p><em>Prevention:</em> Reduce stress, avoid excessive caffeine and alcohol, and manage existing health conditions.</p>
                    </li>
                </ul>

                <h2>Diet for Heart Health</h2>
                <p>A heart-healthy diet includes:</p>
                <ul>
                    <li><strong>Whole Grains:</strong> Such as oats, brown rice, and whole grain bread that help lower cholesterol.</li>
                    <li><strong>Fruits and Vegetables:</strong> Rich in vitamins, minerals, and fiber that support overall health.</li>
                    <li><strong>Healthy Fats:</strong> Sources like avocados, nuts, and olive oil can improve heart health.</li>
                    <li><strong>Lean Proteins:</strong> Such as fish and poultry to maintain muscle mass without excess saturated fat.</li>
                </ul>

                <h2>General Tips</h2>
                <p>To keep your heart healthy:</p>
                <ul>
                    <li>Engage in regular physical activity, aiming for at least 150 minutes per week.</li>
                    <li>Maintain a healthy weight and manage stress effectively.</li>
                    <li>Avoid smoking and limit alcohol intake.</li>
                    <li>Regularly monitor blood pressure and cholesterol levels.</li>
                </ul>
            `;
            break;

        default:
            content = '<p class="text-danger">Please type "liver", "lungs", "kidney", "stomach", or "heart" to get information about it.</p>';
    }

    resultDiv.innerHTML = content;
});
