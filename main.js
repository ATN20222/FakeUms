let slider=document.querySelector(".slider");

let Check1=document.querySelector(".Check1");
let Check2=document.querySelector(".Check2");
let Check3=document.querySelector(".Check3");

slider.style.transation="ease 2s"

Check1.style.backgroundColor="rgba(255, 255, 255, 0.9)";

setTimeout(function(){
    slider.style.right="100%";
    Check1.style.backgroundColor="rgba(255, 255, 255, 0.516)";
    Check2.style.backgroundColor="rgba(255, 255, 255, 0.9)"; 

},10000)


setTimeout(function(){
    slider.style.right="200%";
    Check2.style.backgroundColor="rgba(255, 255, 255, 0.516)";
    Check3.style.backgroundColor="rgba(255, 255, 255, 0.9)"; 

},20000)

setTimeout(function(){
    slider.style.right="0%";
    Check3.style.backgroundColor="rgba(255, 255, 255, 0.516)";
    Check1.style.backgroundColor="rgba(255, 255, 255, 0.9)"; 
},30000)


var check1=document.getElementById("Check1");
check1.onclick=function(){
    slider.style.right="100%";
}


var span1=document.querySelector(".span1");

// window.onload=function(){
//     span1.style.left="530px";
//     span1.style.opacity="100%"
// }


setTimeout(function(){
    span1.style.left="530px";
    span1.style.opacity="100%"
},1000)



let CardsContainer=document.querySelector(".CardsContainer");


window.onscroll=function(){
    CardsContainer.style.right="0%";
    CardsContainer.style.opacity="100%";
    ServicesContainer.style.opacity="100%";
    ServicesContainer.style.left="00%";


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

let heigh=LoginContainer.style.top;
console.log(heigh);

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

        top:1000,
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

        top:1000,
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

        top:1000,
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

        top:1000,
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

        top:1000,
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

        top:1000,
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

        top:1000,
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

        top:700,
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

        top:600,
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

        top:500,
        behavior:"smooth"
    }
    );

    
}


let ServicesContainer=document.querySelector(".ServicesContainer");

// window.onscroll=function(){
//     ServicesContainer.style.opacity="100%";
//     ServicesContainer.style.left="0%";

// }
