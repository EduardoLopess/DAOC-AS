using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Models.Domain.Enums
{
    public enum ProductCategory
    {
        [Description("Eletrônicos")]
        Electronics,

        [Description("Roupas")]
        Clothing,

        [Description("Beleza")]
        Beauty,

        [Description("Casa")]
        Home,

        [Description("Esportes")]
        Sports,

        [Description("Comida")]
        Food,

        [Description("Livros")]
        Books,

        [Description("Saúde")]
        Health,

        [Description("Brinquedos")]
        Toys,

        [Description("Automotivo")]
        Automotive,

        [Description("Joias")]
        Jewelry,

        [Description("Móveis")]
        Furniture,

        [Description("Suprimentos para Animais")]
        PetSupplies,

        [Description("Ferramentas")]
        Tools,

        [Description("Material de Escritório")]
        OfficeSupplies
    }
}