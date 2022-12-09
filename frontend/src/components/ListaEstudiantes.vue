<script>
export default {
    name: "ListaEstudiantes",
    data() {
        return {
            id: null,
            nombre: null,
            aprobado: null,
            listaEstudiantes: []
        }
    },
    mounted() {
        fetch('http://localhost:3312/api/v1/estudiantes')
            .then((response) => response.json())
            .then((data) => (this.listaEstudiantes = data))
    },
    methods: {
        agregarEstudiante() {
            let status;
            if(this.aprobado == "APROBADO")
            {
                status = true;
            }else{
                status = false;
            }
            fetch('http://localhost:3312/api/v1/nuevoEstudiante', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    id: this.id,
                    nombre: this.nombre,
                    aprobado: status
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                }).then(() => {
                    window.location.reload();
                });
        },
        eliminarEstudiante(id) {
            fetch("http://localhost:3312/api/v1/eliminarEstudiante", {
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
        actualizarEstudiante(id) {
            let status;
            if(this.aprobado == "APROBADO")
            {
                status = true;
            }else{
                status = false;
            }            
            //Nombres de los elementos html
            if (!(!this.id || !this.nombre || !this.aprobado)) {
                fetch("http://localhost:3312/api/v1/actualizarEstudiante", {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        id: id,
                        nombre: this.nombre,
                        aprobado: status,
                    }),

                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    }).then(() => {
                        window.location.reload()
                    });
            } else {
                alert('Campos vacios')
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
                    <form @submit.prevent="agregarEstudiante">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>Estudiantes</h1>
                            </div>
                            <div class="col-lg-6">
                                <fieldset>
                                    <label for="Name" class="form-label">ID: </label>
                                    <input class="input_Margin" v-model="id" type="text" placeholder="Ingresa el id"
                                        required>
                                </fieldset>
                                <fieldset>
                                    <label for="Name" class="form-label">Nombre: </label>
                                    <input class="input_Margin" v-model="nombre" type="text"
                                        placeholder="Ingresa el nombre" required>
                                </fieldset>
                                <select class="form-control" v-model="aprobado">
                                    <option>APROBADO</option>
                                    <option>REPROBADO</option>
                                </select>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <button id="bregistrarchofer" class="btn_Registra">Registrar</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <table class="table" id="tablaDirecciones">
        <thead>
            <tr class="tr_TableHead">
                <th style="font-size: 14px;">ID</th>
                <th style="font-size: 14px;">Nombre</th>
                <th style="font-size: 14px;">Status</th>
                <th style="font-size: 14px;">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <!-- aquí va el for para las consultas de la tabla -->
            <tr v-for="estudiante in listaEstudiantes" v-bind:key="estudiante.id">
                <!-- nombres del modelo -->
                <td style="font-size: 13px;">{{ estudiante.id }}</td>
                <td style="font-size: 13px;">{{ estudiante.nombre }}</td>
                <td style="font-size: 13px;">{{ estudiante.aprobado }}</td>
                <td style="font-size: 13px;">
                    <button class="btn_Actualizar" @click="actualizarEstudiante(estudiante.id)">Actualizar</button>
                    <button class="btn_Eliminar" @click="eliminarEstudiante(estudiante.id)">Eliminar</button>
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
    background-color: #4CAF50;
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
