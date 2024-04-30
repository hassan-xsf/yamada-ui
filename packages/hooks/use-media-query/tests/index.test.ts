import { renderHook } from "@yamada-ui/test"
import { useMediaQuery } from "../src"

describe("useMediaQuery", () => {
  test("`(prerers-color-scheme: dark)` should be truthy", () => {
    const { result } = renderHook(() =>
      useMediaQuery("(prefers-color-scheme: dark)"),
    )

    expect(result.current).toBeTruthy()
  })
})
