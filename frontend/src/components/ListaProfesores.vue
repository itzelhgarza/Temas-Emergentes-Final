<script>
export default {
    name: "ListaProfesores",
    data() {
        return {
            id: null,
            nombre: null,
            materia: null,
            listaProfesores: []
        }
    },
    mounted() {
        fetch('http://localhost:3312/api/v1/profesores')
            .then((response) => response.json())
            .then((data) => (this.listaProfesores = data))
    },
    methods: {
        agregarProfesor() {
            fetch('http://localhost:3312/api/v1/nuevoProfesor', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    id: this.id,
                    nombre: this.nombre,
                    materia: this.materia
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                }).then(() => {
                    window.location.reload();
                });
        },
        eliminarProfesor(id) {
            fetch("http://localhost:3312/api/v1/eliminarProfesor", {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    id: id,
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                }).then(() => {
                    window.location.reload();
                });
        },
        actualizarProfesor(id) {
            //Nombres de los elementos html
            if (!(!this.id || !this.nombre || !this.materia)) {
                fetch("http://localhost:3312/api/v1/actualizarProfesor", {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        id: id,
                        nombre: this.nombre,
                        materia: this.materia
                    }),

                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    }).then(() => {
                        window.location.reload()
                    });
            } else {
                alert('Existen campos vacíos')
            }
        }
    }
}
</script>


<template>
    <div class="reservation-form">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <form @submit.prevent="agregarProfesor">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>Profesores</h1>
                            </div>
                            <div class="col-lg-6">
                                <fieldset>
                                    <label for="Name" class="form-label">ID: </label>
                                    <input class="input_Margin" v-model="id" type="text" placeholder="..." required>
                                </fieldset>
                                <fieldset>
                                    <label for="Name" class="form-label">Nombre: </label>
                                    <input class="input_Margin" v-model="nombre" type="text" placeholder="..." required>
                                </fieldset>
                                <fieldset>
                                    <label for="Name" class="form-label">Materia: </label>
                                    <input class="input_Margin" v-model="materia" type="text" placeholder="..."
                                        required>
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <button id="bregistrarprofesor" class="btn_Registra">Registrar</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <table class="table" id="tablaProfesores">
        <thead>
            <tr class="tr_TableHead">
                <th style="font-size: 14px;">ID</th>
                <th style="font-size: 14px;">Nombre</th>
                <th style="font-size: 14px;">Materia</th>
                <th style="font-size: 14px;">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <!-- For para llenar la tabla-->
            <tr v-for="profesor in listaProfesores" v-bind:key="profesor.id">
                <!-- nombres del modelo -->
                <td style="font-size: 13px;">{{ profesor.id }}</td>
                <td style="font-size: 13px;">{{ profesor.nombre }}</td>
                <td style="font-size: 13px;">{{ profesor.materia }}</td>
                <td style="font-size: 13px;">
                    <button class="btn_Actualizar" @click="actualizarProfesor(profesor.id)">Actualizar</button>
                    <button class="btn_Eliminar" @click="eliminarProfesor(profesor.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.input_Margin {
    margin-left: 40px;
}

/* Estilos de botones */
.btn_Registra {
    background-color: #7fd482;
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
}

.btn_Registra:hover {
    background-color: #45a049;
}

.btn_Actualizar {
    background-color: #008CBA;
    border: none;
    border-radius: 25px;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
}

.btn_Actualizar:hover {
    background-color: #02789f;
}

.btn_Eliminar {
    background-color: #f44336;
    border: none;
    border-radius: 25px;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
}

.btn_Eliminar:hover {
    background-color: #d32f2f;
}
</style>
