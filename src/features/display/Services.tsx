import { Container, Divider, Stack } from "@mui/material";
import ChipTabHeader from "../../components/ChipTabHeader";
import servicelist from "../../temp-object-file/Services";
import BlockBtn from "../../components/BlockBtn";
import ServiceBox from "../../components/ServiceBox";
interface ServiceProps{
  isPage : boolean;
}
const Services : React.FC<ServiceProps> = ({isPage}) => {
  return (
    <Container>
      <ChipTabHeader isPage={isPage} heading="Our Services" linktext="See All" forward="/allservices" backward="/"/>
      <Divider/>
      <Stack
        direction="column"
        spacing={3}
        sx={{ width: "98%", marginX: "auto", marginY: 2 }}
      >
        {servicelist.map((list) => {
          return <ServiceBox title={list.title} types={list.types} to="/haircuts"/>;
        })}
      </Stack>
      <BlockBtn btnText="Book Now" btnSubText="" />
    </Container>
  );
};
export default Services;
