const { createApp } = Vue

let school1 = "./images/yellowjacket.jpeg";
let school2 = "./images/terrier.gif";
let school3 = "./images/finance.png";
let school4 = "./images/marketing.png";
let school5 = "./images/intbusiness.png";
let school6 = "./images/softDev.png";

const schools = [school1,school2,school3,school4,school5,school6]

createApp({
    data() {
        return {
            schools,
            UWS1: schools[0],
            UWS2: schools[0],
            UWS3: schools[0],
            BU1: schools[1],
        }
    },
    methods: {
        updateSchool(id){
            this.UWS1 = this.schools[id]
        },
        resetSchool(){
            this.UWS1 = schools[0];
        },

        updateSchool1(id){
            this.UWS2 = this.schools[id]
        },
        resetSchool1(){
            this.UWS2 = schools[0];
        },
        
        updateSchool2(id){
            this.UWS3 = this.schools[id]
        },
        resetSchool2(){
            this.UWS3 = schools[0];
        },

        updateSchool3(id){
            this.BU1 = this.schools[id]
        },
        resetSchool3(){
            this.BU1 = schools[1];
        },
    }
    
}).mount('#app')