<template>
    <header class="mb-3">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a href="#" class="burger-btn d-block">
                    <i class="bi bi-justify fs-3"></i>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown me-1">
                            <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-envelope fs-4 text-gray-600"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <h6 class="dropdown-header">Mail</h6>
                                </li>
                                <li><a class="dropdown-item" href="#">No new mail</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-bell fs-4 text-gray-600"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <h6 class="dropdown-header">Notifications</h6>
                                </li>
                                <li><a class="dropdown-item">No notification available</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="dropdown">
                        <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="user-menu d-flex">
                                <div class="user-name text-end me-3">
                                    <h6 class="mb-0 text-gray-600">John Ducky</h6>
                                    <p class="mb-0 text-sm text-gray-600">Administrator</p>
                                </div>
                                <div class="user-img d-flex align-items-center">
                                    <div class="avatar avatar-md">
                                        <img data-src="~assets/images/faces/1.jpg" v-lazy-load>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
                            <li>
                                <h6 class="dropdown-header">Hello, John!</h6>
                            </li>
                            <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-person me-2"></i> My
                                    Profile</a></li>
                            <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-gear me-2"></i>
                                    Settings</a></li>
                            <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-wallet me-2"></i>
                                    Wallet</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#"><i
                                        class="icon-mid bi bi-box-arrow-left me-2"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>