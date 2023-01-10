import { ThemeContext, useTheme } from '@emotion/react'
import { Divider, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Timeline = ({item}) => {
    const theme = useTheme();
  return (
    <Stack direction={"row" } justifyContent="space-between" alignItems="center">
        <Divider width="46%" />
        <Typography variant='caption' sx={{color: theme.palette.text}}>{item.text}</Typography>
        <Divider width="46%" />
    </Stack>
  )
}

export {Timeline}
