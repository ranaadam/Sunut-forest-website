 
     document.getElementById('proceedButton').addEventListener('click', function() {
             // Get the input values and clean up whitespace
            const cardholderName = document.getElementById('cardholderName').value.trim();
            const cardNumber = document.getElementById('cardNumber').value.trim();
            const expiryDate = document.getElementById('expiryDate').value.trim();
            const cvv = document.getElementById('cvv').value.trim();

            // Grab the message display areas
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');

             // Reset messages when button is clicked
            successMessage.textContent = '';
            errorMessage.textContent = '';

             // Check for empty fields (basic validation)
            if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
                errorMessage.textContent = 'Please fill in all the required fields.';
                return; // Stop further checks if any field is empty
            }

             // Card number format check: 16 digits, can be grouped in 4s by spaces
            if (!/^(\d{4} ?){3}\d{4}$/.test(cardNumber)) {
                errorMessage.textContent = 'Invalid card number format.';
                return; // Stop if invalid
            }
            // Expiry Date format check: MM/YY
            if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
                errorMessage.textContent = 'Invalid expiry date format. Use MM/YY.';
                return; // Stop if invalid
            }
             // CVV format check: 3 or 4 digits
             if (!/^\d{3,4}$/.test(cvv)) {
                errorMessage.textContent = 'Invalid CVV format.';
                return; // Stop if invalid
            }

            // If all checks pass, show the success message
            successMessage.textContent = 'Payment successful!';
        });
  