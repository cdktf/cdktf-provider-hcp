# `hcp_packer_channel_assignment`

Refer to the Terraform Registory for docs: [`hcp_packer_channel_assignment`](https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment).

# `packerChannelAssignment` Submodule <a name="`packerChannelAssignment` Submodule" id="@cdktf/provider-hcp.packerChannelAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PackerChannelAssignment <a name="PackerChannelAssignment" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment hcp_packer_channel_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

new packerChannelAssignment.PackerChannelAssignment(scope: Construct, id: string, config: PackerChannelAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig">PackerChannelAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig">PackerChannelAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationFingerprint">resetIterationFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationId">resetIterationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationVersion">resetIterationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: PackerChannelAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIterationFingerprint` <a name="resetIterationFingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationFingerprint"></a>

```typescript
public resetIterationFingerprint(): void
```

##### `resetIterationId` <a name="resetIterationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationId"></a>

```typescript
public resetIterationId(): void
```

##### `resetIterationVersion` <a name="resetIterationVersion" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationVersion"></a>

```typescript
public resetIterationVersion(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

packerChannelAssignment.PackerChannelAssignment.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

packerChannelAssignment.PackerChannelAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

packerChannelAssignment.PackerChannelAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference">PackerChannelAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprintInput">iterationFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationIdInput">iterationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersionInput">iterationVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprint">iterationFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationId">iterationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersion">iterationVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: PackerChannelAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference">PackerChannelAssignmentTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iterationFingerprintInput`<sup>Optional</sup> <a name="iterationFingerprintInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprintInput"></a>

```typescript
public readonly iterationFingerprintInput: string;
```

- *Type:* string

---

##### `iterationIdInput`<sup>Optional</sup> <a name="iterationIdInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationIdInput"></a>

```typescript
public readonly iterationIdInput: string;
```

- *Type:* string

---

##### `iterationVersionInput`<sup>Optional</sup> <a name="iterationVersionInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersionInput"></a>

```typescript
public readonly iterationVersionInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PackerChannelAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iterationFingerprint`<sup>Required</sup> <a name="iterationFingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprint"></a>

```typescript
public readonly iterationFingerprint: string;
```

- *Type:* string

---

##### `iterationId`<sup>Required</sup> <a name="iterationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationId"></a>

```typescript
public readonly iterationId: string;
```

- *Type:* string

---

##### `iterationVersion`<sup>Required</sup> <a name="iterationVersion" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersion"></a>

```typescript
public readonly iterationVersion: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PackerChannelAssignmentConfig <a name="PackerChannelAssignmentConfig" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.Initializer"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

const packerChannelAssignmentConfig: packerChannelAssignment.PackerChannelAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.bucketName">bucketName</a></code> | <code>string</code> | The slug of the HCP Packer Registry bucket where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.channelName">channelName</a></code> | <code>string</code> | The name of the HCP Packer channel being managed. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationFingerprint">iterationFingerprint</a></code> | <code>string</code> | The fingerprint of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationId">iterationId</a></code> | <code>string</code> | The ID of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationVersion">iterationVersion</a></code> | <code>number</code> | The incremental version of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The slug of the HCP Packer Registry bucket where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#bucket_name PackerChannelAssignment#bucket_name}

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The name of the HCP Packer channel being managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#channel_name PackerChannelAssignment#channel_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iterationFingerprint`<sup>Optional</sup> <a name="iterationFingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationFingerprint"></a>

```typescript
public readonly iterationFingerprint: string;
```

- *Type:* string

The fingerprint of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#iteration_fingerprint PackerChannelAssignment#iteration_fingerprint}

---

##### `iterationId`<sup>Optional</sup> <a name="iterationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationId"></a>

```typescript
public readonly iterationId: string;
```

- *Type:* string

The ID of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#iteration_id PackerChannelAssignment#iteration_id}

---

##### `iterationVersion`<sup>Optional</sup> <a name="iterationVersion" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationVersion"></a>

```typescript
public readonly iterationVersion: number;
```

- *Type:* number

The incremental version of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#iteration_version PackerChannelAssignment#iteration_version}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the channel is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#project_id PackerChannelAssignment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PackerChannelAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#timeouts PackerChannelAssignment#timeouts}

---

### PackerChannelAssignmentTimeouts <a name="PackerChannelAssignmentTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.Initializer"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

const packerChannelAssignmentTimeouts: packerChannelAssignment.PackerChannelAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PackerChannelAssignmentTimeoutsOutputReference <a name="PackerChannelAssignmentTimeoutsOutputReference" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { packerChannelAssignment } from '@cdktf/provider-hcp'

new packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PackerChannelAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

---



