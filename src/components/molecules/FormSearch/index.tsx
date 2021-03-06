import React from 'react'

import SearchBar from 'assets/ic_busca.svg'

import { Form, IconSearch, InputSearch } from './styles'

interface IFormSearchProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (heroSearch: string) => void
  isLight?: boolean
  initialValue?: string
}

function FormSearch({
  initialValue = '',
  onSubmit,
  isLight = false,
}: IFormSearchProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formProps = Object.fromEntries(formData)
    onSubmit(String(formProps.heroSearch))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <IconSearch src={SearchBar} />
      <InputSearch
        defaultValue={initialValue || ''}
        isLight={Boolean(isLight)}
        name="heroSearch"
        placeholder="Procure por heróis"
      />
    </Form>
  )
}

export default FormSearch
