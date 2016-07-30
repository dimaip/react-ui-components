import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Tree from './index.js';

storiesOf('Tree', module)
    .add('default', () => (
        <div>
            adfasdfa
            <Tree>
                <Tree.Node>
                    <Tree.Node.Header
                        item={{
                            hasChildren: true,
                            isCollapsed: false,
                            isActive: true,
                            isFocused: true,
                            isLoading: false,
                            hasError: false,
                            label: 'Active focused node with children'
                        }}
                        onNodeToggle={action('onNodeToggle')}
                        onNodeClick={action('onNodeClick')}
                        onNodeFocus={action('onNodeFocus')}
                        />
                    <Tree.Node.Contents>
                        <Tree.Node>
                            <Tree.Node.Header
                                item={{
                                    hasChildren: false,
                                    isCollapsed: true,
                                    isActive: false,
                                    isFocused: false,
                                    isLoading: false,
                                    hasError: false,
                                    label: 'Normal node'
                                }}
                                onNodeToggle={action('onNodeToggle')}
                                onNodeClick={action('onNodeClick')}
                                onNodeFocus={action('onNodeFocus')}
                                />
                        </Tree.Node>
                        <Tree.Node>
                            <Tree.Node.Header
                                item={{
                                    hasChildren: false,
                                    isCollapsed: true,
                                    isActive: true,
                                    isFocused: false,
                                    isLoading: false,
                                    hasError: false,
                                    label: 'Active node'
                                }}
                                onNodeToggle={action('onNodeToggle')}
                                onNodeClick={action('onNodeClick')}
                                onNodeFocus={action('onNodeFocus')}
                                />
                        </Tree.Node>
                        <Tree.Node>
                            <Tree.Node.Header
                                item={{
                                    hasChildren: false,
                                    isCollapsed: true,
                                    isActive: false,
                                    isFocused: true,
                                    isLoading: false,
                                    hasError: false,
                                    label: 'Focused node'
                                }}
                                onNodeToggle={action('onNodeToggle')}
                                onNodeClick={action('onNodeClick')}
                                onNodeFocus={action('onNodeFocus')}
                                />
                        </Tree.Node>
                    </Tree.Node.Contents>
                </Tree.Node>
            </Tree>
        </div>
    ));
