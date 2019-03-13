var txtName = document.getElementById("txtName");

var cboDay = document.getElementById("cboDay");
var cboMonth = document.getElementById("cboMonth");
var cboYear = document.getElementById("cboYear");

var arrMonth = ["Januari","Februari", "Maart" , "April" , "Mei", "Juni", "Juli","Augustus","September","Oktober","November","December"];

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", addAccount);

function addAccount(){
    if(txtName.value != ""){
        var divContainer = document.querySelector(".section-accounts__container");

        var gender = document.querySelector('input[name="gender"]:checked').value;

        var name = txtName.value;
        var day = cboDay.value;
        var month = cboMonth.value;
        var year = cboYear.value;

        var monthNumber = arrMonth.indexOf(month) + 1;

        if(day.toString().length == 1){
            day = "0"+ day;
        }
        
        if(monthNumber.toString().length == 1){
            monthNumber = "0"+ monthNumber;
        }

        var birthday = day + "/" + monthNumber + "/" + year;

        var divAccount = document.createElement("div");

        if(gender == "female"){
            divAccount.setAttribute("class","section-accounts__account section-accounts__account--female")
        }else if(gender == "male"){
            divAccount.setAttribute("class","section-accounts__account section-accounts__account--male")
        }else{
            divAccount.setAttribute("class","section-accounts__account section-accounts__account--other")
        }

        var pName = document.createElement("p");
        pName.setAttribute("class","section-accounts__name");
        pName.innerHTML = name;

        var pBirthday = document.createElement("p");
        pBirthday.setAttribute("class","section-accounts__birthday");
        pBirthday.innerHTML = birthday;

        divAccount.appendChild(pName);
        divAccount.appendChild(pBirthday);

        divContainer.appendChild(divAccount);

        txtName.value = "";
    }
}

function fillCboBirthday(){
    for(var i =1; i<32; i++){
        var option = document.createElement("option");
        option.text = i;
        cboDay.add(option);
    }

    for(var i = 0; i<arrMonth.length;i++){
        var option = document.createElement("option");
        option.text = arrMonth[i];
        cboMonth.add(option);
    }

    for(var i =1900; i<2020; i++){
        var option = document.createElement("option");
        option.text = i;
        cboYear.add(option);
    }
}

fillCboBirthday();