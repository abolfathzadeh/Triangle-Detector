$(function () {
    var ViewModel = function (Side1, Side2, Side3) {
    this.Side1 = ko.observable(Side1);
    this.Side2 = ko.observable(Side2);
    this.Side3 = ko.observable(Side3);

    this.CheckTriangleType = function () {
        try{
        CheckResult(this.Side1(), this.Side2(), this.Side3());
        }
        catch(error)
            {
                alert(error)
                //logingError(error)
            }
    }
    this.ClearData = function ()
    {
        this.Side1 = "";
        this.Side2 = "";
        this.Side3 = "";

    }
};

ko.applyBindings(new ViewModel("", "", ""));
});
function Validate(s1, s2, s3)
{
    if (s1 == "" || s2 == "" || s3 == ""
        || Number(s1) == 0 || Number(s2) == 0 || Number(s3) == 0)
        return false;
    return true;
}

function CheckResult(s1, s2, s3)
{
   if (Validate(s1, s2, s3) == false) {
        alertify.alert("please Enter All Sides");
        $("#alertify-ok").text("Close");
        alertify.set({ buttonFocus: "ok" });
    }
    else {
    var res="";
    var url = "/Home/Check?a="+s1+"&b="+s2+"&c="+s3;
    $.ajax({
        type: "GET",
        url: url,
        cache: false,
        timeout: 30000,
        success: function (result) {
            res = result;
            alertify.alert('<div class="alertify-alert" style="text-align:center;margin:10px;"><div style="background-color:#F8F8FF;padding-top: 2px;padding-bottom: 10px;border-color: darkblue;border: rgba(0, 255, 50, 0.13);border-style: dotted;">' + res + '</div></div>');
            $("#alertify-ok").text("Close");
            alertify.set({ buttonFocus: "ok" });
        },
        error: function (data) {
            res = "We Have an Error!!!";
        }
    });
    }
}
