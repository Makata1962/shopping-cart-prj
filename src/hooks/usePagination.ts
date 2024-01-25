import { useState, useCallback } from 'react';

function usePagination(itemsLength: number, pageSize: number) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(itemsLength / pageSize);
    const isLastPage = page >= totalPages;

    const nextPage = useCallback(() => {
        setPage((currentPage) => (currentPage < totalPages ? currentPage + 1 : currentPage));
    }, [totalPages]);

    const prevPage = useCallback(() => {
        setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : currentPage));
    }, []);

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    return {
        page,
        nextPage,
        prevPage,
        isLastPage,
        startIndex,
        endIndex
    };
}

export default usePagination;
