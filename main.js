// let slider=document.querySelector(".slider");

// let Check1=document.querySelector(".Check1");
// let Check2=document.querySelector(".Check2");
// let Check3=document.querySelector(".Check3");

// slider.style.transation="ease 2s"

// Check1.style.backgroundColor="rgba(255, 255, 255, 0.9)";

// setTimeout(function(){
//     slider.style.right="100%";
//     Check1.style.backgroundColor="rgba(255, 255, 255, 0.516)";
//     Check2.style.backgroundColor="rgba(255, 255, 255, 0.9)"; 

// },10000)


// setTimeout(function(){
//     slider.style.right="200%";
//     Check2.style.backgroundColor="rgba(255, 255, 255, 0.516)";
//     Check3.style.backgroundColor="rgba(255, 255, 255, 0.9)"; 

// },20000)

// setTimeout(function(){
//     slider.style.right="0%";
//     Check3.style.backgroundColor="rgba(255, 255, 255, 0.516)";
//     Check1.style.backgroundColor="rgba(255, 255, 255, 0.9)"; 
// },30000)


// var check1=document.getElementById("Check1");
// check1.onclick=function(){
//     slider.style.right="100%";
// }


// var span1=document.querySelector(".span1");

// window.onload=function(){
//     span1.style.left="530px";
//     span1.style.opacity="100%"
// }


// setTimeout(function(){
//     span1.style.left="530px";
//     span1.style.opacity="100%"
// },1000)

let Bar1=document.querySelector(".Bar1");
let Bar2=document.querySelector(".Bar2");
let Bar3=document.querySelector(".Bar3");
let Bar4=document.querySelector(".Bar4");


let InText1=document.querySelector(".cnt1");
let InText2=document.querySelector(".cnt2");
let InText3=document.querySelector(".cnt3");
let InText4=document.querySelector(".cnt4");

let CardsContainer=document.querySelector(".CardsContainer");
let row1=document.querySelector(".row1");
let LoginContainer1=document.querySelector(".LoginContainer")






window.onscroll=function(){

    if(window.scrollY >=500){

        CardsContainer.style.right="0%";
        CardsContainer.style.opacity="100%";
        
    }
    if(window.scrollY >=700){

        LoginContainer1.style.left="0%";
        LoginContainer1.style.opacity="100%";
        
    }

    if(window.scrollY >= 2000){
        ServicesContainer.style.opacity="100%";
        ServicesContainer.style.left="00%";
        Bar1.style.width="130px";
        Bar2.style.width="170px";
        Bar3.style.width="190px";
        Bar4.style.width="130px";
        
        
        
        let StartValue1=0;
        let EndVAlue1=19;
        let speed1=100;
        
        
        let StartValue2=1229110;
        let EndVAlue2=1229145;
        let speed2=100;
        
        let StartValue3=1229000;
        let EndVAlue3=1229145;
        let speed3=10;
        
        let StartValue4=20140;
        let EndVAlue4=20540;
        let speed4=10;
        
        
        let Increamenting1= setInterval(()=>{
    StartValue1++;
    InText1.innerHTML=StartValue1+"+";
    if(StartValue1==EndVAlue1){
        clearInterval(Increamenting1);
    }
}, speed1);



let Increamenting2= setInterval(()=>{
    StartValue2++;
    InText2.innerHTML=StartValue2;
    if(StartValue2==EndVAlue2){
        clearInterval(Increamenting2);
    }
}, speed2)



let Increamenting3= setInterval(()=>{
    StartValue3++;
    InText3.innerHTML=StartValue3;
    if(StartValue3==EndVAlue3){
        clearInterval(Increamenting3);
    }
}, speed3)





let Increamenting4= setInterval(()=>{
    StartValue4+=10;
    InText4.innerHTML=StartValue4;
    if(StartValue4==EndVAlue4){
        clearInterval(Increamenting4);
    }
}, speed4)



        
    }
    if(window.scrollY >= 2200){

        row1.style.right="00%";
        row1.style.opacity="100%";

    }    


}




let NavBtn1=document.getElementById("NavBtn1");
let NavBtn2=document.getElementById("NavBtn2");
let NavBtn3=document.getElementById("NavBtn3");
let DownNavP1=document.querySelector(".DownNavP1");
let DownNavP2=document.querySelector(".DownNavP2");
let DownNavP3=document.querySelector(".DownNavP3");

NavBtn3.style.backgroundColor="#1c335f";
    NavBtn3.style.color="orange";
    NavBtn2.style.backgroundColor="transparent";
    NavBtn1.style.backgroundColor=" transparent";
    NavBtn2.style.color="#677294";
    NavBtn1.style.color="#677294";

    DownNavP1.style.display="block";
    DownNavP2.style.display="none";
    DownNavP3.style.display="none";

NavBtn1.onclick=function(){
    NavBtn1.style.backgroundColor="#1c335f";
    NavBtn1.style.color="orange";
    NavBtn2.style.backgroundColor="transparent";
    NavBtn3.style.backgroundColor=" transparent";
    NavBtn2.style.color="#677294";
    NavBtn3.style.color="#677294";
    DownNavP1.style.display="none";
    DownNavP2.style.display="none";
    DownNavP3.style.display="block";

}
NavBtn2.onclick=function(){
    
    
    NavBtn2.style.backgroundColor="#1c335f";
    NavBtn2.style.color="orange";
    NavBtn1.style.backgroundColor="transparent";
    NavBtn3.style.backgroundColor=" transparent";
    NavBtn1.style.color="#677294";
    NavBtn3.style.color="#677294";
    DownNavP1.style.display="none";
    DownNavP2.style.display="block";
    DownNavP3.style.display="none";
}
NavBtn3.onclick=function(){
    NavBtn3.style.backgroundColor="#1c335f";
    NavBtn3.style.color="orange";
    NavBtn2.style.backgroundColor="transparent";
    NavBtn1.style.backgroundColor=" transparent";
    NavBtn2.style.color="#677294";
    NavBtn1.style.color="#677294";
    DownNavP1.style.display="block";
    DownNavP2.style.display="none";
    DownNavP3.style.display="none";
}


let LoginContainer=document.querySelector(".LoginContainer");
let EarlyAdmissionContainer=document.querySelector(".EarlyAdmissionContainer");
let GraduatesAssociationContainer=document.querySelector(".GraduatesAssociationContainer");
let FacultiesServicesContainer=document.querySelector(".FacultiesServicesContainer");
let CentersServicesContainer=document.querySelector(".CentersServicesContainer");
let ConferenceContainer=document.querySelector(".ConferenceContainer");
let ApplicationContainer=document.querySelector(".ApplicationContainer");
let BlendedLearningContainer=document.querySelector(".BlendedLearningContainer");
let DocumentationContainer=document.querySelector(".DocumentationContainer");
let CourseraContainer=document.querySelector(".CourseraContainer");
let Card1=document.getElementById("Card1");
let Card2=document.getElementById("Card2");
let Card3=document.getElementById("Card3");
let Card4=document.getElementById("Card4");
let Card5=document.getElementById("Card5");
let Card6=document.getElementById("Card6");
let Card7=document.getElementById("Card7");
let Card8=document.getElementById("Card8");
let Card9=document.getElementById("Card9");
let Card10=document.getElementById("Card10");



EarlyAdmissionContainer.style.display="none";
GraduatesAssociationContainer.style.display="none";
FacultiesServicesContainer.style.display="none";
CentersServicesContainer.style.display="none";
ConferenceContainer.style.display="none";
ApplicationContainer.style.display="none";
BlendedLearningContainer.style.display="none";
DocumentationContainer.style.display="none";
CourseraContainer.style.display="none";


Card1.onclick=function(){
    LoginContainer.style.display="block";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );


}


Card2.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="block";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );


}

Card3.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="block";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

}

Card4.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="block";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({
        
        top:400,
        behavior:"smooth"
    }
    );

    
}
Card5.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="block";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

    
}
Card6.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="block";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

    
}
Card7.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="block";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

}
Card8.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="block";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

}
Card9.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="block";
    CourseraContainer.style.display="none";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

    
}
Card10.onclick=function(){
    LoginContainer.style.display="none";
    EarlyAdmissionContainer.style.display="none";
    GraduatesAssociationContainer.style.display="none";
    FacultiesServicesContainer.style.display="none";
    CentersServicesContainer.style.display="none";
    ConferenceContainer.style.display="none";
    ApplicationContainer.style.display="none";
    BlendedLearningContainer.style.display="none";
    DocumentationContainer.style.display="none";
    CourseraContainer.style.display="block";
    window.scrollBy({

        top:400,
        behavior:"smooth"
    }
    );

    
}


let ServicesContainer=document.querySelector(".ServicesContainer");
let body1=document.querySelector(".body");
let DarkLink=document.querySelector(".DarkLink");
let MainDownNav=document.querySelector(".MainDownNav");
let Ungraduated=document.querySelector(".Ungraduated");
let footer=document.querySelector("footer");
let NavInfo=document.querySelector(".NavInfo")







//Dark Mode Activition 
let Dark=document.getElementById("DarkMode");
let CountersContainer=document.querySelector(".CountersContainer");

Dark.onclick=function(){
    body1.style.backgroundColor="black";
    body1.style.color="white";
    CardsContainer.style.backgroundImage="none";
    DarkLink.style.color="white";
    EarlyAdmissionContainer.style.backgroundColor="transparent";
    GraduatesAssociationContainer.style.backgroundColor="transparent";
    FacultiesServicesContainer.style.backgroundColor="transparent";
    CentersServicesContainer.style.backgroundColor="transparent";
    ConferenceContainer.style.backgroundColor="transparent";
    ApplicationContainer.style.backgroundColor="transparent";
    BlendedLearningContainer.style.backgroundColor="transparent";
    DocumentationContainer.style.backgroundColor="transparent";
    CourseraContainer.style.backgroundColor="transparent";
    MainDownNav.style.backgroundColor="transparent";
    Ungraduated.style.backgroundColor="transparent";
    Ungraduated.style.color="#bfc8e3";
    NavInfo.style.backgroundColor="#131517";
    Card1.style.backgroundColor="#15191f";
    Card2.style.backgroundColor="#15191f";
    Card3.style.backgroundColor="#15191f";
    Card4.style.backgroundColor="#15191f";
    Card5.style.backgroundColor="#15191f";
    Card6.style.backgroundColor="#15191f";
    Card7.style.backgroundColor="#15191f";
    Card8.style.backgroundColor="#15191f";
    Card9.style.backgroundColor="#15191f";
    Card10.style.backgroundColor="#15191f";
    CountersContainer.style.backgroundColor="transparent";
    footer.style.backgroundColor="transparent";
    


    EarlyAdmissionContainer.style.color="white";
    GraduatesAssociationContainer.style.color="white";
    FacultiesServicesContainer.style.color="white";
    CentersServicesContainer.style.color="white";
    ConferenceContainer.style.color="white";
    ApplicationContainer.style.color="white";
    BlendedLearningContainer.style.color="white";
    DocumentationContainer.style.color="white";
    CourseraContainer.style.color="white";
    
}
