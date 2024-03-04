import React from "react";
import { Container, Divider, Stack } from "@mui/material";
import ChipTabHeader from "../../components/TabHeader";
import servicelist from "../../temp-object-file/Services";
import BlockBtn from "../../components/BlockBtn";
import ServiceBox from "../../components/ServiceBox";
interface ServiceProps {
  isPage: boolean;
}
const Services: React.FC<ServiceProps> = ({ isPage }) => {
  return (
    <Container>
      <ChipTabHeader
        isPage={isPage}
        heading="Our Services"
        linktext="See All"
        forward="/allservices"
        backward="/saloondetails"
      />
      <Divider />
      <Stack direction="column" spacing={3} sx={{ width: "98%", marginX: "auto", marginY: 2 }}>
        {servicelist.map((list, index) => {
          return <ServiceBox title={list.title} types={list.types} to="/haircut" key={index} />;
        })}
      </Stack>
      <BlockBtn btnText="Book Now" btnSubText="" />
    </Container>
  );
};
export default Services;
