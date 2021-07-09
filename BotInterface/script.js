
                //String x="ItWorks";
               


                function fwd() {
                    console.log("Lights On");
               
                    
                 fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D2?value=1")  ;
                 fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D3?value=0")  ;
                 //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=0")  ;

                 fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D4?value=1")  ;
                 fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=0")  ;
                 //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=0")  ;
                    

                    
                };
                function back() {
                    console.log("Lights Off");
                    
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D2?value=0")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D3?value=1")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D?value=1")  ;

                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D4?value=0")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=1")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=1")  ;
                }
                function stop() {
                    console.log("Lights Off");
                        
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D2?value=0")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D3?value=0")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D?value=0")  ;

                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D4?value=0")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=0")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=0")  ;
                }
                function left() {
                    console.log("Lights On");
                    
                   
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D2?value=1")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D3?value=0")  ;

                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D4?value=0")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=1")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=0")  ;
                }
                function right() {
                    console.log("Lights On");
                    
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D2?value=0")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D3?value=1")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=0")  ;

                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D4?value=1")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D5?value=0")  ;
                   //fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=1")  ;
                }
                function water(){
                    console.log("Water On");
                   
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=1")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D9?value=0")  ;
                   
                }
                function waterstop(){
                    console.log("Water Off");
                   
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=1")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D9?value=1")  ;
                   
                }
                function mop(){
                    console.log("Mop On");
                   
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D6?value=1")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D7?value=0")  ;

                }
                function mopstop(){
                    console.log("Mop Off");
                   
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D6?value=1")  ;
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D7?value=1")  ;

                }
                function servo(){
                fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=1");
                fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D9?value=0");
               }
               function servostop(){
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=0");
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D9?value=0");
               }
               function ovres(){
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D8?value=0");
                   fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/update/D9?value=1");
               }
               function servoup(){
                    stop();
                    servo();
                    setTimeout(servostop(), 600);
               }
               function servodown(){
                stop();
                ovres();
                setTimeout(servostop(), 600);
           }
           //if(fetch("http://blynk-cloud.com/5qTv1uegrMZ1RwSFLMBWSoIVmhcb4Uzb/isHardwareConnected")=="false")
           //var myVar = setInterval(stop(), 100);
           //else
           //clearInterval(myvar);
            
            



