# Khipu Payment Integration Demo

Esta es una demo simple de integración con la API de pagos de [Khipu](https://khipu.com) en el entorno de pruebas (`DemoBank`). Permite simular la creación de un cobro y redireccionar al flujo de pago de Khipu.

## Stack utilizado

- **Node.js** (20+)
- **Express** (API REST)
- **Axios** (peticiones HTTP)
- **Dotenv** (manejo de variables de entorno)
- **Frontend HTML/CSS** (puro, simple)

## Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/GTigre/khipu-payment-integration.git
cd khipu-payment-integration
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Configura tus variables de entorno

- Copia el archivo de ejemplo y edítalo:
  ```bash
  cp .env.example .env
  ```
- **Edita `.env`** y revisa que estén las credenciales entregadas:

  ```
  PORT=3000
  KHIPU_RECEIVER_ID=498850
  KHIPU_SECRET=1774f4c8e7cd0640cf1cd8e230082de7f7f377b4
  ```

### 4. Ejecuta el servidor

```bash
npm start
```
- El frontend estará disponible en:  
  [http://localhost:3000](http://localhost:3000)

---

## ¿Cómo funciona?

1. **Desde el frontend** puedes ingresar el monto (hasta $5.000 CLP) y una descripción.
2. **Al hacer clic en "Pagar con Khipu"**, se crea un cobro vía API REST al backend.
3. **El backend** crea el cobro usando la API oficial de Khipu.
4. **Se redirecciona** al usuario a la página de pago de Khipu (entorno DemoBank).
5. **Puedes simular el pago** (o cancelarlo) y volverás a la app con una página de éxito/cancelación.

---

## Endpoints relevantes

### POST `/api/payments`
- **Body:**  
  ```json
  {
    "amount": 1000,
    "subject": "Pago de prueba"
  }
  ```
- **Response exitosa:**  
  ```json
  {
    "payment_url": "https://khipu.com/payment/show/...",
    "payment_id": "..."
  }
  ```
- **Response error:**  
  ```json
  {
    "error": "Descripción del error"
  }
  ```

---

## Decisiones técnicas y buenas prácticas

- La **lógica de integración** se mantiene aislada en `/services` y la API en `/controllers`.
- **Variables sensibles** nunca viajan al frontend.
- El código es **simple, comentado** y fácil de extender.
- Permite simular un flujo real de pago sin salir del entorno de pruebas.
- El frontend es minimalista para facilitar la revisión.

---

## ¿Qué sigue?

- Puedes extender la solución agregando tests, autenticación, o un frontend más robusto (React, etc).
- En la entrevista puedo explicar mejoras, manejo de errores, logging avanzado, validación de callbacks, etc.

---

## Dependencias

- Node.js 20+
- NPM

---

**Contacto:**  
Gonzalo Tigre  
+56965239022  
[https://www.linkedin.com/in/gonzalo-tigre/](https://www.linkedin.com/in/gonzalo-tigre/)

---

**¡Listo para usar, clonar y subir a GitHub!**  
Si necesitas ayuda con el deploy o explicación para la entrevista, avísame.
