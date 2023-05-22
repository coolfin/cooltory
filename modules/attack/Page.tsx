import { Container } from "@/components/Container"
import { Card, Tabs } from "@geist-ui/core"
import Exp from "./exp/Page"
import classNames from "classnames"

export const Page = () => {
    return (
        <Container>
            <div className={classNames(
                'w-full',
                'h-full',

                'pt-12',
            )}>
                <Card>
                    <p className={classNames(
                        'text-sm',
                        'py-2',
                    )}>📸 각 이미지는 클릭 시 <i className={classNames(
                        'text-blue-500',
                    )}>입수 방법</i>이 표시됩니다.</p>
                </Card>
                <div className={classNames(
                    'w-full',
                    'h-full',

                    'pt-12',
                )}>
                    <Tabs hideDivider>
                        {/* 도핑 */}
                        <Tabs.Item label="도핑" value="1">
                            <Exp />
                        </Tabs.Item>
                        {/* 리부트 스펙업 순서 */}
                        <Tabs.Item label="스펙업 순서" value="2" />
                        {/* 던전 프로스트 */}
                        <Tabs.Item label="던전 프로스트" value="3" />
                    </Tabs>
                </div>
            </div>

        </Container>
    )
}

export default Page