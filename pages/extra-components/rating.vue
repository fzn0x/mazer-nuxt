<template>
<div class="page-heading">
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Rating</h3>
                <p class="text-subtitle text-muted">Rating with <a href="">rater-js</a>. Pure javascript rating library
                </p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Rating</li>
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
                        <h4 class="card-title">Basic Rating</h4>
                    </div>
                    <div class="card-body">
                        <div id="basic"></div>
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
                        <h4 class="card-title">5 Star Rating with Step</h4>
                    </div>
                    <div class="card-body">
                        <div id="step"></div>
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
                        <h4 class="card-title">Unlimited Number of Stars</h4>
                    </div>
                    <div class="card-body">
                        <div id="unli1"></div>
                        <br>
                        <div id="unli2"></div>
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
        raterJs({
            element: document.querySelector("#basic"), 
            starSize: 32,
            rateCallback:function rateCallback(rating, done) {
                this.setRating(rating); 
                done(); 
            }
        });

        raterJs({
            element:document.querySelector("#step"),
            rateCallback:function rateCallback(rating, done) {
                this.setRating(rating); 
                done(); 
            },
            starSize:32,
            step:0.5
        })
        raterJs({
            element:document.querySelector("#unli1"),
            rateCallback:function rateCallback(rating, done) {
                this.setRating(rating); 
                done(); 
            },
            starSize:32,
            max:10, 
            step:0.5
        })
        raterJs({
            element:document.querySelector("#unli2"),
            rateCallback:function rateCallback(rating, done) {
                this.setRating(rating); 
                done(); 
            },
            starSize:32,
            max:16, 
            step:0.5
        })
    }
}
</script>