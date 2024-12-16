<template>

        <div class="selection showUp">
            <div class="center">
                <a>Sign-Up</a>

                <form id="signUpForm" enctype="multipart/form-data">
                    <div>
                        <label for="eMail">Email:</label>
                        <textarea id="eMail" name="eMail" placeholder="Email" required rows="1"></textarea>
                    </div>
                    <br>
                    <div>
                        <label for="passWord">Password:</label>
                        <textarea id="passWord" name="passWord" placeholder="passWord" required rows="1"></textarea>
                    </div>
                    <br>
                    <div id="validationMessage" style="color: red;"></div>
                    <div>
                        <button type="submit">Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
    </template>

<script>
    export default {
        name:"SignUp"
    }
</script>