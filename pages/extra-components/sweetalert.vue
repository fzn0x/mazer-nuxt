<template>
<div class="page-heading">
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Sweet Alert</h3>
                <p class="text-subtitle text-muted">A beautiful replacement for javascript alerts</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Sweet Alert</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Basic Sweet Alert</h4>
                        <p class="text-muted">SweetAlert automatically centers itself on the page and looks great no
                            matter if you're using a desktop computer, mobile or tablet. It's even highly customizable,
                            as you can see below!</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <button id="basic" class="btn btn-outline-primary btn-lg btn-block">Basic
                                    Example</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="title" class="btn btn-outline-primary btn-lg btn-block">A title with a text
                                    under</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="footer" class="btn btn-outline-primary btn-lg btn-block">With
                                    Footer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Types</h4>
                        <p class='text-muted'>The type of the modal. SweetAlert comes with 5 built-in types which will
                            show a corresponding icon animation: "warning", "error", "success" and "info". You can also
                            set it as "input" to get a prompt modal. It can either be put in the object under the key
                            "icon" or passed as the third parameter of the function.</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <button id="success" class="btn btn-outline-success btn-lg btn-block">Success</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="error" class="btn btn-outline-danger btn-lg btn-block">Error</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="warning" class="btn btn-outline-warning btn-lg btn-block">Warning</button>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6 col-12">
                                <button id="info" class="btn btn-outline-info btn-lg btn-block">Info</button>
                            </div>
                            <div class="col-md-6 col-12">
                                <button id="question"
                                    class="btn btn-outline-secondary btn-lg btn-block">Question</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Alert Input</h4>
                        <p class='text-muted'>The type of the modal. SweetAlert comes with 5 built-in types which will
                            show a corresponding icon animation: "warning", "error", "success" and "info". You can also
                            set it as "input" to get a prompt modal. It can either be put in the object under the key
                            "icon" or passed as the third parameter of the function.</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <button id="text" class="btn btn-outline-success btn-lg btn-block">Text</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="email" class="btn btn-outline-danger btn-lg btn-block">Email</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="url" class="btn btn-outline-warning btn-lg btn-block">URL</button>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-4 col-12">
                                <button id="password" class="btn btn-outline-info btn-lg btn-block">Password</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="textarea"
                                    class="btn btn-outline-secondary btn-lg btn-block">Textarea</button>
                            </div>
                            <div class="col-md-4 col-12">
                                <button id="select" class="btn btn-outline-secondary btn-lg btn-block">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    mounted() {
        document.getElementById('basic').addEventListener('click', (e) => {
            this.$swal.fire('Any fool can use a computer')
        })
        document.getElementById('footer').addEventListener('click', (e) => {
            this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
        })
        document.getElementById('title').addEventListener('click', (e) => {
            this.$swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
        })
        document.getElementById('success').addEventListener('click', (e) => {
            this.$swal.fire({
                icon: "success",
                title: "Success"
            })
        })
        document.getElementById('error').addEventListener('click', (e) => {
            this.$swal.fire({
                icon: "error",
                title: "Error"
            })
        })
        document.getElementById('warning').addEventListener('click', (e) => {
            this.$swal.fire({
                icon: "warning",
                title: "Warning"
            })
        })
        document.getElementById('info').addEventListener('click', (e) => {
            this.$swal.fire({
                icon: "info",
                title: "Info"
            })
        })
        document.getElementById('question').addEventListener('click', (e) => {
            this.$swal.fire({
                icon: "question",
                title: "Question"
            })
        })
        document.getElementById('text').addEventListener('click', (e) => {
        
            this.$swal.fire({
                title: 'Enter your IP address',
                input: 'text',
                inputLabel: 'Your IP address',
                showCancelButton: true,
            })

        })
        document.getElementById('email').addEventListener('click', async (e) => {
        
            const { value: email } = await this.$swal.fire({
                title: 'Input email address',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
            })
            
            if (email) {
                this.$swal.fire(`Entered email: ${email}`)
            }

        })
        document.getElementById('url').addEventListener('click', async (e) => {
        
            const { value: url } = await this.$swal.fire({
                input: 'url',
                inputLabel: 'URL address',
                inputPlaceholder: 'Enter the URL'
            })
            
            if (url) {
                this.$swal.fire(`Entered URL: ${url}`)
            }
        })
        document.getElementById('password').addEventListener('click', async (e) => {

            const { value: password } = await this.$swal.fire({
                title: 'Enter your password',
                input: 'password',
                inputLabel: 'Password',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
                }
            })
            
            if (password) {
                this.$swal.fire(`Entered password: ${password}`)
            }
        
        })
        document.getElementById('textarea').addEventListener('click', async (e) => {
            const { value: text } = await this.$swal.fire({
                input: 'textarea',
                inputLabel: 'Message',
                inputPlaceholder: 'Type your message here...',
                inputAttributes: {
                'aria-label': 'Type your message here'
                },
                showCancelButton: true
            })
            
            if (text) {
                this.$swal.fire(text)
            }
        })
        document.getElementById('select').addEventListener('click', async (e) => {
            const { value: fruit } = await this.$swal.fire({
                title: 'Select field validation',
                input: 'select',
                inputOptions: {
                'Fruits': {
                    apples: 'Apples',
                    bananas: 'Bananas',
                    grapes: 'Grapes',
                    oranges: 'Oranges'
                },
                'Vegetables': {
                    potato: 'Potato',
                    broccoli: 'Broccoli',
                    carrot: 'Carrot'
                },
                'icecream': 'Ice cream'
                },
                inputPlaceholder: 'Select a fruit',
                showCancelButton: true,
                inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'oranges') {
                    resolve()
                    } else {
                    resolve('You need to select oranges :)')
                    }
                })
                }
            })
            
            if (fruit) {
                this.$swal.fire(`You selected: ${fruit}`)
            }
        
        })
    }
}
</script>