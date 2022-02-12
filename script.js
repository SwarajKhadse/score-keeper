function incTeam1(){
var team1= parseInt(document.getElementById("scoreTeam1").innerHTML);
if(team1<25){
    team1++;
}
document.getElementById("scoreTeam1").innerHTML=team1;
}
function decTeam1(){
    var team1= parseInt(document.getElementById("scoreTeam1").innerHTML);
    if(team1<25&&team1>0){
        team1--;
    }
    document.getElementById("scoreTeam1").innerHTML=team1;
    }
    function incTeam2(){
        var team2= parseInt(document.getElementById("scoreTeam2").innerHTML);
        if(team2<25){
            team2++;
        }
        document.getElementById("scoreTeam2").innerHTML=team2;
        }
        function decTeam2(){
            var team2= parseInt(document.getElementById("scoreTeam2").innerHTML);
            if(team2<25&&team2>0){
                team2--;
            }
            document.getElementById("scoreTeam2").innerHTML=team2;
            }
 