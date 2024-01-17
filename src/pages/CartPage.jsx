import { Tabs, TabList } from "@mui/joy";

const CartPage = () => {
    return (
        <Tabs aria-label="Scrollable tabs" defaultValue={0} sx={{ width: 1 }}>
            <TabList
                sx={{
                    overflow: "auto",
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": { display: "none" },
                }}></TabList>
        </Tabs>
    );
};
export default CartPage;