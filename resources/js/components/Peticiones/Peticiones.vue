<template>
    <div class="container vh-100">
        <div class="row my-5">
            <div class="col-md-8">
                <div class="card text-left">
                    <div class="card-body">
                        <h4 class="card-title">Realiza una petición</h4>
                        <p class="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Beatae aperiam voluptates mollitia nulla ipsa
                            iusto accusantium eius corrupti blanditiis eum,
                            deleniti ipsum? Vitae odio debitis sapiente saepe
                            tempore consequatur aperiam?
                        </p>
                        <div class="card mb-3 text-left">
                            <div class="card-body">
                                <h4 class="card-title">Petición Genérica</h4>
                                <p class="card-text">
                                    En esta petición podrás requerir:
                                </p>
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Dolor iste obcaecati
                                    </li>
                                    <li>
                                        maxime est assumenda error officia, fuga
                                        deleniti repellendus libero, soluta
                                        consequatur.
                                    </li>
                                    <li>
                                        Libero, nemo iusto assumenda sequi
                                        necessitatibus blanditiis ex?
                                    </li>
                                </ul>
                                <a
                                    class="btn btn-primary"
                                    href="/peticiones/genericas"
                                >Solicitar</a
                                >
                            </div>
                        </div>
                        <div class="card text-left">
                            <div class="card-body">
                                <h4 class="card-title">
                                    Petición de Parqueadero
                                </h4>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Est minima nemo
                                    perferendis officiis itaque repudiandae fuga
                                    suscipit quibusdam, explicabo rem! Soluta
                                    quam aspernatur explicabo, distinctio
                                    deserunt ad sequi id iusto.
                                </p>
                                <a
                                    class="btn btn-primary"
                                    href="/peticiones/parqueadero"
                                >Solicitar</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-left">
                    <div class="card-body">
                        <h4 class="card-title">Bienvenido!</h4>
                        <p class="card-text">
                            Recuerda que para poder realizar una petición deberás estar registrado y aprobado en el
                            sitio
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            if (this.$auth.isAuthenticated()) this.getUser();
        },
        data() {
            return {
                user: {}
            }
        },
        methods: {
            getUser() {
                const url = "/api/auth/user";
                axios
                    .get(url)
                    .then(response => {
                        this.user = response.data.data;
                    })
                    .catch();
            }
        }
    }
</script>

<style scoped>
    .vh-100 {
        min-height: 74vh;
    }
</style>
