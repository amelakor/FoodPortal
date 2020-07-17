 
            $("#PreConstructionRequestButtonFloorPlans").click(function () {
                if ($("#PreConstructionRequestFirstNameFloorPlans").val() == '') {
                    alert('Please enter your first name.');
                    return false;
                }
                if ($("#PreConstructionRequestLastNameFloorPlans").val() == '') {
                    alert('Please enter your last name.');
                    return false;
                }
                if (!check_email($("#PreConstructionRequestEmailFloorPlans").val())) {
                    alert('Your email address is invalid. Please try again.');
                    return false;
                }
                if ($("#PreConstructionRequestPhoneFloorPlans").val() == '') {
                    alert('Please enter your phone.');
                    return false;
                }
                var registerMe = 0;
                if (document.getElementsByName('registerMe').length > 0) {
                    if (document.getElementById('registerMe').checked == true) {
                        registerMe = 1;
                    }
                }

                $.ajax({
                    type: "POST",
                    url: "/index.asp?PageAction=ResponsiveThemeAjax&AjaxCMD=PreConstructionRequestForm",
                    data: {
                        Email: $("#PreConstructionRequestEmailFloorPlans").val(),
                        firstName: $("#PreConstructionRequestFirstNameFloorPlans").val(),
                        lastName: $("#PreConstructionRequestLastNameFloorPlans").val(),
                        phoneNumber: $("#PreConstructionRequestPhoneFloorPlans").val(),
                        registerMe: registerMe
                    }
                }).done(function (msg) {
                    $("#PreConstructionRequestDivFloorPlans").html("<h4 class='title'>Thank you!</h4><p>" + msg + "</p>");
                    return false;
                });

                return false;

            });