import React, { useEffect, useState } from "react";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useNavigate } from "react-router-dom";
import axiosInstance from "lib/axios";
interface salonItem {
  id: number;
  distance: number;
  rating: number;
  image: string;
  name: string;
  addresses: {
    id: string;
    street: string;
    city: string;
  }[];
}

interface salonProps {
  dataTODisplay: salonItem[];
}

const SalonDataDisplay: React.FC<salonProps> = ({ dataTODisplay }) => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    // Load bookmarks from localStorage when component mounts
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarks(savedBookmarks);
  }, []);

  const handleSalonClick = (salonId: number) => {
    axiosInstance
      .get(`/salon/salondetails/${salonId}`)
      .then((response) => {
        const data = response.data.salon;
        console.log(response.data.salon);
        navigate("/saloondetails", { state: { salonDetails: data } });
      })
      .catch((error) => {
        console.log("Error fetching salon details:", error);
      });
  };

  const handleToggleBookmark = async (salonId: number) => {
    const updatedBookmarks = bookmarks.includes(salonId)
      ? bookmarks.filter((id) => id !== salonId) // Remove bookmark
      : [...bookmarks, salonId]; // Add bookmark

    // Update state and localStorage
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    try {
      if (bookmarks.includes(salonId)) {
        await axiosInstance.patch(`/bookmark/deletebookmark/${salonId}`);
      } else {
        await axiosInstance.patch(`/bookmark/addbookmark/${salonId}`);
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      // Revert changes if backend update fails
      setBookmarks(bookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  };

  return (
    <>
      {dataTODisplay.map((data) => (
        <Grid container spacing={4} key={data.id} justifyContent="space-between">
          <Grid item mb={2} ml={2} onClick={() => handleSalonClick(data.id)} sx={{ cursor: "pointer" }}>
            <Grid container>
              <Grid item>
                <Avatar
                  src={data.image}
                  alt="salonImages"
                  sx={{ width: 150, height: 150, borderRadius: "20%" }}
                ></Avatar>
              </Grid>
              <Grid item>
                <Grid container direction={"column"} spacing={3} pl={2}>
                  <Grid item>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {data.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{data.addresses[0].street}</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item pt={0.3}>
                        <LocationOnIcon fontSize="medium" sx={{ color: "#ff9800" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          {data.distance}
                          km
                        </Typography>
                      </Grid>

                      <Grid item pl={4} pt={0.3}>
                        <StarHalfIcon fontSize="medium" sx={{ color: "#ff9800" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">{data.rating}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mr={2} ml={48}>
            {bookmarks.includes(data.id) ? (
              <IconButton onClick={() => handleToggleBookmark(data.id)}>
                <BookmarkIcon sx={{ color: "#ff9800" }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleToggleBookmark(data.id)}>
                <BookmarkBorderIcon sx={{ color: "#ff9800" }} />
              </IconButton>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default SalonDataDisplay;
