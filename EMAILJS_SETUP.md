# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita
- Confirma tu email

### 2. Configurar un servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta de email
- **Guarda el SERVICE ID que se genera**

### 3. Crear un template de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Usa este template:

```
Asunto: Nuevo mensaje desde la web de Binary - {{subject}}

De: {{from_name}} ({{from_email}})
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de la web de Binary Argentina.
```

- **Guarda el TEMPLATE ID que se genera**

### 4. Obtener tu Public Key
- Ve a "Account" > "General"
- Copia tu **Public Key**

### 5. Configurar variables de entorno
En el archivo `.env.local` (ya creado), reemplaza los valores:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_real
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_real  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_real
NEXT_PUBLIC_TO_EMAIL=tu_email@personal.com
```

**✅ El código ya está configurado para usar variables de entorno de forma segura**

### 6. Para cambiar al email del cliente más tarde
Solo cambia esta línea en `.env.local`:
```
NEXT_PUBLIC_TO_EMAIL=email_del_cliente@empresa.com
```

## Límites del plan gratuito
- 200 emails por mes
- Soporte básico
- Perfecto para comenzar y luego se puede upgradear si necesario

¡Una vez configurado, el formulario estará completamente funcional!