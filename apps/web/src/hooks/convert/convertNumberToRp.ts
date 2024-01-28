export const NumberToIDR = ({ amount }: any) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return {formatter(amount)};
};