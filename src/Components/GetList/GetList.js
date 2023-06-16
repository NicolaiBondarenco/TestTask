import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../Server'
import {
  setUsers,
  setPage,
  toggleActiveBtn,
  setError,
  setLoading,
} from '../../Store/UsersSlice'
import { GetItem } from '../GetItem/GetItem'
import { Error } from '../Error/Error'
import { Loading } from '../Loading/Loading'
import { Button } from '../../ui/Button/Button'

import './GetList.scss'

export const GetList = () => {
  const { allUsers, page, activeBtn, error, loading } = useSelector(
    (state) => state.users,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    getUsers(page)
      .then((res) => {
        dispatch(setUsers(res.users))
        if (allUsers.length + 6 >= res.total_users) dispatch(toggleActiveBtn())
        dispatch(setLoading(false))
      })
      .catch((err) => dispatch(setError()))
  }, [page])

  const renderItem = (el) => {
    return (
      <GetItem
        key={el.id}
        email={el.email}
        image={el.photo}
        name={el.name}
        phone={el.phone}
        position={el.position}
        id={el.id}
        allUsers={allUsers}
      />
    )
  }

  const increasePageCount = () => dispatch(setPage(page + 1))

  return (
    <div className="getList">
      <h3 className="getList__title">Working with GET request</h3>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="getList__box">
          {allUsers && allUsers.map(renderItem)}
        </div>
      )}
      <Button
        title="Show more"
        width="120"
        ml="0"
        handleClick={increasePageCount}
        disabled={activeBtn || loading}
      />
    </div>
  )
}
