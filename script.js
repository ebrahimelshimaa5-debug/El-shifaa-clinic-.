import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Supabase configuration for El-Shifaa Specialized Clinic
const supabaseUrl = 'https://qgvihzpskyrchyrccxby.supabase.co';
const supabaseKey = 'sb_publishable_Lh_VOHfdnwLn2yX6_fSqpA_reR6LKQ2';

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("El-Shifaa Specialized Clinic connected to Supabase successfully!");

// Connect appointment form to the database
const form = document.getElementById('appointmentForm');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent page reload

        // Get input values from the form
        const name = document.getElementById('patientName').value;
        const phone = document.getElementById('patientPhone').value;

        // Insert data into the APPOINTMENT table in Supabase
        const { data, error } = await supabase
            .from('APPOINTMENT')
            .insert([
                { patient_name: name, phone_number: phone }
            ]);

        if (error) {
            console.error('Error inserting data:', error.message);
            alert('An error occurred while booking. Please try again.');
        } else {
            console.log('Data inserted successfully:', data);
            alert('Appointment booked successfully and saved to the database!');
            form.reset(); // Clear the form fields
        }
    });
}
