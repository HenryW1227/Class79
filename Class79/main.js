var snames = []
function submitting()
{
    var n1 = document.getElementById("s1").value;
    var n2 = document.getElementById("s2").value;
    var n3 = document.getElementById("s3").value;
    var n4 = document.getElementById("s4").value;

    snames.push(n1)
    snames.push(n2)
    snames.push(n3)
    snames.push(n4)
    console.log(snames)

    document.getElementById("display1").innerHTML=snames;
    document.getElementById("submit1").style.display="none";
    document.getElementById("sort1").style.display="inline-block";
}
function sorting()
{
    snames.sort()
    document.getElementById("display1").innerHTML=snames;
}