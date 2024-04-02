import React from 'react';

const Politics: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4 text-[#B36F09]">Política de Envíos</h1>
            <div className="text-lg">
                <p className="mb-4">
                    <strong>1. Áreas de Envío</strong><br />
                    Enviamos nuestros productos a direcciones dentro de España peninsular, Islas Baleares, Islas Canarias, Ceuta y Melilla.
                </p>
                <p className="mb-4">
                    <strong>2. Costo de Envío</strong><br />
                    El costo de envío se calculará en función del peso del paquete y la ubicación de entrega. Ofrecemos envío gratuito para pedidos que superen un cierto valor. Los detalles sobre los costos de envío se mostrarán durante el proceso de compra.
                </p>
                <p className="mb-4">
                    <strong>3. Tiempo de Entrega</strong><br />
                    El tiempo de entrega estimado varía según la ubicación y la disponibilidad del producto. Los tiempos de entrega se indicarán durante el proceso de compra. Haremos nuestro mejor esfuerzo para garantizar que los pedidos se entreguen en el menor tiempo posible.
                </p>
                <p className="mb-4">
                    <strong>4. Proceso de Envío</strong><br />
                    Una vez que se haya confirmado el pedido y se haya completado el pago, procederemos a preparar y enviar el paquete. Se proporcionará un número de seguimiento para que puedas rastrear tu envío. Nos esforzamos por garantizar que los productos se empaqueten de forma segura para evitar daños durante el transporte.
                </p>
                <p className="mb-4">
                    <strong>5. Dirección de Entrega</strong><br />
                    Es responsabilidad del cliente proporcionar una dirección de entrega precisa y completa al realizar el pedido. No nos hacemos responsables de los retrasos en la entrega causados por direcciones incorrectas o incompletas proporcionadas por el cliente.
                </p>
                <p className="mb-4">
                    <strong>6. Devoluciones y Reembolsos</strong><br />
                    Por favor, consulta nuestra política de devoluciones y reembolsos para obtener información sobre cómo proceder en caso de que necesites devolver un producto.
                </p>
                <p className="mb-4">
                    <strong>7. Contacto</strong><br />
                    Si tienes alguna pregunta o necesitas ayuda adicional con respecto a los envíos, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estaremos encantados de ayudarte.
                </p>
            </div>
        </div>
    );
}

export default Politics;
