$('md-input-container').addClass('md-input-has-placeholder md-default-theme');$('md-input-container md-icon').addClass('ng-isolate-scope md-default-theme');$('md-input-container input').on('focus',function(){$(this).parent().addClass('md-input-focused')}).each(function(){if($(this).val()>0)$(this).parent().addClass('md-input-has-value')}).on('blur',function(){if($(this).val())$(this).parent().addClass('md-input-has-value')
else $(this).parent().removeClass('md-input-has-value');$(this).parent().removeClass('md-input-focused')}).addClass('ng-pristine ng-valid md-input ng-touched');var LoginOpen=!1;var OthersOpen=!1;var NotificationsOpen=!1;function ShowGbs(ClassName){$(ClassName+" .gb_ab").addClass("DisplayBlockAlways");$(ClassName+" .gb_bb").addClass("DisplayBlockAlways")}
function HideGbs(ClassName){$(ClassName+" .gb_ab").removeClass("DisplayBlockAlways");$(ClassName+" .gb_bb").removeClass("DisplayBlockAlways")}
function PleaseShowOptions(){$(document).mouseup(function(e){var container=$("#loginPanel");var container2=$(".ShowloginPanel");if((!container.is(e.target)&&container.has(e.target).length===0)&&(!container2.is(e.target)&&container2.has(e.target).length===0)){container.removeClass("DisplayBlockAlways");LoginOpen=!1;HideGbs('.gb_jc.gb_8a.gb_Me.gb_R')}});if(LoginOpen==!1){ShowGbs('.gb_jc.gb_8a.gb_Me.gb_R');$("#loginPanel").addClass("DisplayBlockAlways");LoginOpen=!0;$(".gb_6a.gb_Vc.gb_Me.gb_R").fadeIn(400,function(){$(this).focus()});$("#loginPanel").fadeIn(400,function(){$(this).focus()})}else{$("#loginPanel").removeClass("DisplayBlockAlways");LoginOpen=!1;HideGbs('.gb_jc.gb_8a.gb_Me.gb_R');return}}
function PleaseShowOther(){$(document).mouseup(function(e){var container=$("#OthersPanel");var container2=$(".ShowOther");if((!container.is(e.target)&&container.has(e.target).length===0)&&(!container2.is(e.target)&&container2.has(e.target).length===0)){container.removeClass("DisplayBlockAlways");OthersOpen=!1;HideGbs('.gb_ea.gb_Vc.gb_R')}});if(OthersOpen==!1){ShowGbs('.gb_ea.gb_Vc.gb_R');$("#OthersPanel").addClass("DisplayBlockAlways");OthersOpen=!0;return}else{OthersOpen=!1;$("#OthersPanel").removeClass("DisplayBlockAlways");HideGbs('.gb_ea.gb_Vc.gb_R');return}}
function PleaseShowNotifications(){$(document).mouseup(function(e){var container=$("#NotificationsPanel");var container2=$(".ShowNotificationsPanel");if((!container.is(e.target)&&container.has(e.target).length===0)&&(!container2.is(e.target)&&container2.has(e.target).length===0)){container.removeClass("DisplayBlockAlways");NotificationsOpen=!1;HideGbs('.gb_gc.gb_Vc.gb_R.gb_hc')}});if(NotificationsOpen==!1){ShowGbs('.gb_gc.gb_Vc.gb_R.gb_hc');$("#NotificationsPanel").addClass("DisplayBlockAlways");NotificationsOpen=!0;setTimeout(function(){$(".Frame1").addClass("HideAlways").removeClass("DisplayAlways");$(".Frame2").addClass("DisplayAlways").removeClass("HideAlways")},1300);return}else{$("#NotificationsPanel").removeClass("DisplayBlockAlways");NotificationsOpen=!1;HideGbs('.gb_gc.gb_Vc.gb_R.gb_hc');return}}
$('[data-name="ValidationClass"]').addClass('disabled');$('[data-watch-onblur]').on('blur',function(){var email=$('#email').val();var phone=$('#phone').val();var num=$(this).parent().index()-1;if(num==1&&!validatePhone(phone)){$('[data-name="PhoneClass"]').addClass('md-input-invalid');$('[data-name="ValidationClass"]').addClass('disabled');return 0}
if(num==2&&!validateEmail(email)){$('[data-name="EmailClass"]').addClass('md-input-invalid');$('[data-name="ValidationClass"]').addClass('disabled');return 0}
Refresh(num)});$('md-input-container [data-watch-onfocus]').on('focus change keydown keyup',function(){var num=$(this).parent().index()-1;Refresh(num);var email=$('#email').val();var phone=$('#phone').val();if(num==1&&!phone)$('[data-name="PhoneClass"]').removeClass('md-input-invalid');if(num==2&&!email)$('[data-name="EmailClass"]').removeClass('md-input-invalid')});var Refresh=function(num){var email=$('#email').val();var phone=$('#phone').val();if(email.length<1)email=!1;if((!phone&&num==1)||(!email&&num==2)){if(num==1&&!phone)$('[data-name="PhoneClass"]').addClass('md-input-invalid');if(num==2&&!email)$('[data-name="EmailClass"]').addClass('md-input-invalid');$('[data-name="ValidationClass"]').addClass('disabled');return 0}else if(phone>0||email>0){$('[data-name="PhoneClass"]').removeClass('md-input-invalid');$('[data-name="EmailClass"]').removeClass('md-input-invalid')}
else{$('[data-name="PhoneClass"]').removeClass('md-input-invalid');$('[data-name="EmailClass"]').removeClass('md-input-invalid')}
if(validateEmail(email)||parseInt(phone)>0)
$('[data-name="ValidationClass"]').removeClass('disabled')};function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email)}
function validatePhone(phone_number){var re=/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;return re.test(phone_number)}
