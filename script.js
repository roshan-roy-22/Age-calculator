function calculateAge() {
    let birthdate = document.getElementById('date').value;
    const result = document.getElementById('result');
    console.log(birthdate);

    if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            let data=new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            console.log(data);
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        result.innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
        result.style.color="green"
        console.log(birthdate);
        document.getElementById('date').value = "";
        // birthdate="";
        
    }else{
        result.innerText=`Please enter your Birthdate!`
        result.style.color="red"
    }
    
}
