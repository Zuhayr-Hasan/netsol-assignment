<template>
    <div class="container-fluid">
        <a class="navbar-brand nav-logo" href="#">NETSOL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex">
                <div class="d-flex">
                    <div class="dropdown me-1">
                        <button type="button" class="btn nav-btn  dropdown-toggle" id="dropdownMenuOffset"
                            data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                            Regions
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <li>
                                <NuxtLink class="dropdown-item" to="/en-us">USA</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/en-uk">UK</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/en-cn">China</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/en-pk">Pakistan</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $primary: #0025CE;
    $secondary: #0D93EF;
    $white: #fff;

    nav {
        .nav-logo {
            color: $white;
            font-weight: 500;
        }

        .nav-btn {
            background: $primary;
            border-radius: 20px;
            color: $white;
            box-shadow: 0px 9px 15px 0px $secondary inset;
            font-size: 16px;
            text-align: center;
            display: inline-block;
            padding: 2px 30px;
            cursor: pointer;
            display: flex;
            justify-content: center;
        }

        .nav-btn::after {
            border-right: 0;
            border-left: 0;
        }

        .dropdown-menu.show {
            background: #09363d;
            border: 1px solid #aaa;
            color: $white;
            border-radius: 10px;
            height: 160px;
            margin-top: 15px;

            .dropdown-item {
                color: $white;
                position: relative;
                margin-top: 1px;
            }

            .dropdown-item::after {
                content: '';
                width: 120px;
                height: 1px;
                background: #aaa;
                position: absolute;
                top: 100%;
                left: 10%;
            }

            .dropdown-item:hover {
                color: #00EAFF;
                background-color: #09363d;
            }

            .dropdown-item:hover::after {
                background: #00EAFF;
            }
        }
    }
</style>