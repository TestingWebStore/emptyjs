var LoginOpen=!1;var OthersOpen=!1;var NotificationsOpen=!1;function ShowGbs(ClassName)
{$(ClassName+" .gb_ab").addClass("DisplayBlockAlways");$(ClassName+" .gb_bb").addClass("DisplayBlockAlways")}
function HideGbs(ClassName)
{$(ClassName+" .gb_ab").removeClass("DisplayBlockAlways");$(ClassName+" .gb_bb").removeClass("DisplayBlockAlways")}
function PleaseShowOptions(){$(document).mouseup(function(e)
{var container=$("#loginPanel");var container2=$(".ShowloginPanel");if((!container.is(e.target)&&container.has(e.target).length===0)&&(!container2.is(e.target)&&container2.has(e.target).length===0))
{container.removeClass("DisplayBlockAlways");LoginOpen=!1;HideGbs('.gb_6a.gb_0c.gb_Ve.gb_R')}});if(!LoginOpen)
{ShowGbs('.gb_lc.gb_8a.gb_Ve.gb_R');$("#loginPanel").addClass("DisplayBlockAlways");LoginOpen=!0;$(".gb_6a.gb_0c.gb_Ve.gb_R").fadeIn(400,function(){$(this).focus()});$("#loginPanel").fadeIn(400,function(){$(this).focus()})}
else{$("#loginPanel").removeClass("DisplayBlockAlways");LoginOpen=!1;HideGbs('.gb_6a.gb_0c.gb_Ve.gb_R');return}}
function PleaseShowOther()
{$(document).mouseup(function(e)
{var container=$("#OthersPanel");var container2=$(".ShowOther");if((!container.is(e.target)&&container.has(e.target).length===0)&&(!container2.is(e.target)&&container2.has(e.target).length===0))
{container.removeClass("DisplayBlockAlways");OthersOpen=!1;HideGbs('.gb_ea.gb_0c.gb_R')}});if(OthersOpen==!1)
{ShowGbs('.gb_ea.gb_0c.gb_R');$("#OthersPanel").addClass("DisplayBlockAlways");OthersOpen=!0;return}
else{OthersOpen=!1;$("#OthersPanel").removeClass("DisplayBlockAlways");HideGbs('.gb_ea.gb_0c.gb_R');return}}
function PleaseShowNotifications()
{$(".Frame1").addClass("DisplayAlways").removeClass("HideAlways");$(document).mouseup(function(e)
{var container=$("#NotificationsPanel");var container2=$(".ShowNotificationsPanel");if((!container.is(e.target)&&container.has(e.target).length===0)&&(!container2.is(e.target)&&container2.has(e.target).length===0))
{container.removeClass("DisplayBlockAlways");NotificationsOpen=!1;HideGbs('.gb_ic.gb_0c.gb_R.gb_jc')}});if(NotificationsOpen==!1)
{ShowGbs('.gb_ic.gb_0c.gb_R.gb_jc');$("#NotificationsPanel").addClass("DisplayBlockAlways");NotificationsOpen=!0;setTimeout(function(){$(".Frame1").addClass("HideAlways").removeClass("DisplayAlways");$(".Frame2").addClass("DisplayAlways").removeClass("HideAlways")},1300);return}
else{$("#NotificationsPanel").removeClass("DisplayBlockAlways");NotificationsOpen=!1;HideGbs('.gb_ic.gb_0c.gb_R.gb_jc');return}}