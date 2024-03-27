"use client";

import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/libs/firebase";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  const router = useRouter();
  const storage = getStorage(firebaseApp);
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images,
      };
    });
  }
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220,  headerClassName: "text-white" },
    { field: "name", headerName: "Nombre", width: 220,  headerClassName: "text-white"},
    {
      field: "price",
      headerName: "Precio(EUR)",
      width: 100,
      headerClassName: "text-white",
      renderCell: (params) => {
        return (
          <div className="font-bold text-[#B36F09]">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Categoria", width: 100, headerClassName: "text-white" },
    { field: "brand", headerName: "Marca", width: 100,  headerClassName: "text-white" },
    {
      field: "inStock",
      headerName: "enStock",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock === true ? (
              <Status
                text="en stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="stock agotado"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ color: 'white' }} className="flex justify-between gap-4 w-full text-white ">
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                handleToggleStock(params.row.id, params.row.inStock);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.row.id, params.row.images);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/product/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleToggleStock = useCallback((id: string, inStock: boolean) => {
    axios
      .put("/api/product", {
        id,
        inStock: !inStock,
      })
      .then((res) => {
        toast.success("El estado del producto cambió");
        router.refresh();
      })
      .catch((err) => {
        toast.error("¡Ups! Algo salió mal");
        console.log(err);
      });
  }, []);

  const handleDelete = useCallback(async (id: string, images: any[]) => {
    toast("Eliminando producto, ¡espera!");

    const handleImageDelete = async () => {
      try {
        for (const item of images) {
          if (item.image) {
            const imageRef = ref(storage, item.image);
            await deleteObject(imageRef);
            console.log("imagen eliminada", item.image);
          }
        }
      } catch (error) {
        return console.log("Error al eliminar imágenes", error);
      }
    };

    await handleImageDelete();

    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        toast.success("Producto eliminado");
        router.refresh();
      })
      .catch((err) => {
        toast.error("No se pudo eliminar el producto");
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Administrar productos" center />
      </div>
      <div className="text-white" style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          style={{
            color: 'white', 
            backgroundColor: '#212121', 
          }}
        />
      </div>
    </div>
  );
};

export default ManageProductsClient;
