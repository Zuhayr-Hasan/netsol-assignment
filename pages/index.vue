<template>
    <div class="container" id="app">
        <!-- Navigation Section Starts -->
        <nav class="navbar navbar-expand-lg mt-3">
            <TheHeader />
        </nav>

        <!-- Home Section Starts -->
        <div class="home mt-3">
            <p class="home--insights-p">News and Insights</p>
            <h1 class="home--leading-h1">Latest Insights from Leading Voices</h1>
            <p class="home--problems-p">Solving the worlds problems through technology wouldnt be possible without our
                most important
                <br />invention:
                the NetSol. Have a look at our talented teams.
            </p>
            <p class="home--news-p">View All News</p>
        </div>

        <!-- Cards Section Starts -->
        <div class="d-flex flex-lg-row flex-md-column flex-sm-column flex-xs-column home-cards gap-2">
            <!-- Card 1 -->
            <div class="card home-cards-container mx-2">
                <img src="@/assets/images/leasing-life.png" alt="Card image" class="card-img-top">
                <div class="card-body">
                    <a href="#" class="btn btn-primary home-cards-btn">NEWS</a>
                    <h5 class="card-title home-cards-h5 mt-3">Leasing Life Conference & Awards</h5>
                    <p class="card-text home-cards-p">Solving the worlds problems through technology wouldnt be
                        possible without our most important invention.</p>
                </div>
            </div>
            <!-- Card 2 -->
            <div class="card home-cards-container">
                <img src="@/assets/images/finance-summit.png" alt="Card image" class="card-img-top">
                <div class="card-body">
                    <a href="#" class="btn btn-primary home-cards-btn">BLOG</a>
                    <h5 class="card-title home-cards-h5 mt-3">Auto Finance Summit 2023</h5>
                    <p class="card-text home-cards-p">Solving the worlds problems through technology wouldnt be
                        possible without our most important invention.</p>
                </div>
            </div>
            <!-- Card 3 -->
            <div class="card home-cards-container">
                <img src="@/assets/images/careers-netsol.png" alt="Card image" class="card-img-top">
                <div class="card-body">
                    <a href="#" class="btn btn-primary home-cards-btn">NEWS</a>
                    <h5 class="card-title home-cards-h5 mt-3">Careers at Netsol</h5>
                    <p class="card-text home-cards-p">Solving the worlds problems through technology wouldnt be possible without our most important invention.</p>
                </div>
            </div>
            <!-- Card 4 -->
            <div class="card home-cards-container">
                <img src="@/assets/images/leasing-awards.png" alt="Card image" class="card-img-top">
                <div class="card-body">
                    <a href="#" class="btn btn-primary home-cards-btn">BLOG</a>
                    <h5 class="card-title home-cards-h5 mt-3">Leasing Life Conference & Awards</h5>
                    <p class="card-text home-cards-p">Solving the worlds problems through technology wouldnt be possible without our most important invention.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    nav {
        border-bottom: 1px solid #222;
        padding: 20px 0;
    }

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;

        .home--insights-p {
            margin-top: 25px;
            padding: 0 10px;
            border-radius: 20px;
            color: white;
            background: #000;
            display: inline-block;
            text-align: center;
            border: 1px solid #222;
        }
      
        .home--leading-h1 {
            font-size: 56px;
            color: #fff;
            line-height: 1.3;
            font-weight: 500;
            text-align: center;
            background: -webkit-linear-gradient(top, #ffffff, #C0C0C0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        .home--problems-p {
            font-size: 24px;
            color: gray;
            text-align: center;
            max-width: 1100px;
            font-weight: 300;
            background: -webkit-linear-gradient(top, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        .home--news-p {
            position: relative;
            color: white;  
            cursor: pointer;
            font-size: 16px;
        }

        .home--news-p::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100px;
            height: 1px;
            background: #fff;
        }
    }

    .home-cards {
        margin-top: 40px;
        background: transparent;

        .home-cards-container {
            background: transparent;
            color: #fff;

            .home-cards-h5 {
                font-size: 16px;
            }
        }

        .home-cards-btn {
            background: #203a64;
            color: #18eafd;
            border: 0;
            font-weight: 500;
        }
    }
</style>