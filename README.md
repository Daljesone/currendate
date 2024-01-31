# Exchange Rate Generator

Este proyecto es una aplicación React que utiliza la API de Frankfurter para generar informes de tasas de cambio entre dos monedas en un rango de fechas especificado.

## Características

- **Selección de Monedas:** Puedes especificar la moneda base y la moneda de destino para obtener tasas de cambio.

- **Rango de Fechas:** Puedes seleccionar un rango de fechas para el cual deseas obtener las tasas de cambio.

- **Generación de Informes:** La aplicación permite generar informes en formato Excel (XLSX) con las tasas de cambio obtenidas.

- **Opciones de Informe:** Puedes elegir generar un informe único o múltiples informes en hojas de Excel separadas.

## Uso

1. **Clonar el Repositorio:**
   ```bash
   git clone  https://github.com/Daljesone/currendate.git
   cd tu-proyecto

2. **Instalar Dependencias:**
    npm install

3. **Ejecutar la Aplicación:**
    npm run start  

4. **Acceder a la Aplicación:**
Abre tu navegador y visita http://localhost:3000.

5. **Configurar Informe:**

    Selecciona la moneda base y de destino.
    Establece el rango de fechas.
    Opcionalmente, activa la opción para generar múltiples hojas.
    Generar Informe:
    Haz clic en el botón "Generate Exchange Rates Report" para generar el informe.

    **Dependencias**
    React: La biblioteca principal para la interfaz de usuario.
    XLSX: Utilizado para la manipulación de archivos Excel (generación de hojas y libros).
    API de Frankfurter
    Este proyecto utiliza la API de Frankfurter para obtener tasas de cambio. Asegúrate de revisar la documentación de la API para obtener más información: Frankfurter API

    **Notas Adicionales**
    Este proyecto es solo un ejemplo y puede requerir ajustes según tus necesidades específicas.
    Asegúrate de manejar adecuadamente las restricciones y límites de uso de la API de Frankfurter.
    Licencia
    Este proyecto está bajo la Licencia MIT - Consulta el archivo LICENSE para más detalles. 
