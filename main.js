var firebaseConfig = {
    apiKey: "AIzaSyAd9A9F-TDppOtIYtVa1-u6qTbFjQkSiJY",
    authDomain: "casualleave-d4059.firebaseapp.com",
    databaseURL: "https://casualleave-d4059.firebaseio.com",
    projectId: "casualleave-d4059",
    storageBucket: "casualleave-d4059.appspot.com",
    messagingSenderId: "652795448837",
    appId: "1:652795448837:web:e981fe5636a73e6362166c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


function find_substitutes(dates, teacher)
{
    console.log("Helloooo");
    /*for (i=0;i<dates.length;i++)
        {
            var st = i;
            var pattern = /(\d{2})\\(\d{2})\\(\d{4})/;
            var dt = new Date(st.replace(pattern,'$3-$2-$1'));
            console.log(dt);
        }
    //db.collection("Timetable").get()
    return "Hello";*/
}

db.collection("Department").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(JSON.stringify(doc.data()));
        var obj = JSON.parse(JSON.stringify(doc.data()));
        console.log(obj.Teacher);
        if (obj.isApproved=="Not")
        {
        var elem = document.createElement('div');
        elem.className = 'card';
        var elembody = document.createElement('div');
        elembody.className = 'card-body';
        var cardBody = document.createElement('p');
        var s = "";
        for (var i=0; i< obj.Dates.length; i++)
            s += obj.Dates[i] + "    "; 
        cardBody.innerHTML = s;
        var cardTitle = document.createElement('h3');
        var accept = document.createElement('button');
        accept.className = 'btn btn-primary';
        accept.onclick = function(){
        db.collection("Department").doc(doc.id).update({
        isApproved:"Yes",
        Substitutes:["Rosemary", "Shruthi"]
    }).then(function() {
    console.log("Document successfully updated!");
}).catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
            document.getElementById('teacher-container').removeChild(elem);
        }
        /*for (var i=0;i<obj.Dates.length;i++)
            {
                var st = obj.Dates[i];
                var days={0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
                var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
                var dt = new Date(st.replace(pattern, '$3-$2-$1'));
                var day = days[dt.getDay()];
                var docref = db.collection('Timetable').doc("kNldNMHVXmVkqGYdvH0p");
                doref.get().then(function(doc){
                    var times = JSON.parse(JSON.stringify(doc.data()));
                    var reschedule = times.Monday;
                    var times_to_replace = []
                })
            }
        }*/
            
    
       /*for (var i=0; i< obj.Dates.length; i++)
           {
            var st = obj.Dates[i];
            var days={0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            var dt = new Date(st.replace(pattern,'$3-$2-$1'));
            var day = days[dt.getDay()];
            var docref = db.collection("Timetable").doc("kNldNMHVXmVkqGYdvH0p");
            docref.get().then(function(doc) {
            var times = JSON.parse(JSON.stringify(doc.data()));
            var rescheduler = times.Monday;
            if (obj.Teacher == "Ritu")
            {
                var times_to_replace = rescheduler.Ritu;
                for (var i=0;i<times_to_replace.length; i++)
                {
                    console.log(rescheduler.free.times_to_replace[i]);
                }
            }
            }
                              
}).catch(function(error) {
    console.log("Error getting cached document:", error);
});

           }
        };*/
            
        
        accept.innerHTML = "ACCEPT";
        //accept.href = "results.html";
        var reject = document.createElement('button');
        reject.className = 'btn btn-primary';
        reject.innerHTML = "REJECT";
        reject.onclick = function()
        {
            document.getElementById('teacher-container').removeChild(elem);
            db.collection("Department").doc(doc.id).update({
        isApproved:"Rejected"
    }).then(function() {
    console.log("Document successfully updated!");
}).catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
        }
        cardTitle.innerText = obj.Teacher;
        cardTitle.className = 'card-title';
        elembody.appendChild(cardTitle);
        elembody.appendChild(cardBody);
        elem.appendChild(elembody);
        elem.appendChild(accept);
        elem.appendChild(reject);
        //elem.innerHTML = JSON.stringify(doc.data());
        document.getElementById('teacher-container').appendChild(elem);
    }  });
});

