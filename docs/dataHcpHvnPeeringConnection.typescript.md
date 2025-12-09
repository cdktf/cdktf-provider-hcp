# `dataHcpHvnPeeringConnection` Submodule <a name="`dataHcpHvnPeeringConnection` Submodule" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpHvnPeeringConnection <a name="DataHcpHvnPeeringConnection" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection hcp_hvn_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

new dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection(scope: Construct, id: string, config: DataHcpHvnPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig">DataHcpHvnPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig">DataHcpHvnPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetHvn2">resetHvn2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: DataHcpHvnPeeringConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

---

##### `resetHvn2` <a name="resetHvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetHvn2"></a>

```typescript
public resetHvn2(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpHvnPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataHcpHvnPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpHvnPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpHvnPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpHvnPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference">DataHcpHvnPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1Input">hvn1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2Input">hvn2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringIdInput">peeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1">hvn1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2">hvn2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpHvnPeeringConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference">DataHcpHvnPeeringConnectionTimeoutsOutputReference</a>

---

##### `hvn1Input`<sup>Optional</sup> <a name="hvn1Input" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1Input"></a>

```typescript
public readonly hvn1Input: string;
```

- *Type:* string

---

##### `hvn2Input`<sup>Optional</sup> <a name="hvn2Input" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2Input"></a>

```typescript
public readonly hvn2Input: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringIdInput"></a>

```typescript
public readonly peeringIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataHcpHvnPeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1"></a>

```typescript
public readonly hvn1: string;
```

- *Type:* string

---

##### `hvn2`<sup>Required</sup> <a name="hvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2"></a>

```typescript
public readonly hvn2: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpHvnPeeringConnectionConfig <a name="DataHcpHvnPeeringConnectionConfig" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.Initializer"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

const dataHcpHvnPeeringConnectionConfig: dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn1">hvn1</a></code> | <code>string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.peeringId">peeringId</a></code> | <code>string</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn2">hvn2</a></code> | <code>string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#id DataHcpHvnPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HVN peering connection is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn1"></a>

```typescript
public readonly hvn1: string;
```

- *Type:* string

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#hvn_1 DataHcpHvnPeeringConnection#hvn_1}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#peering_id DataHcpHvnPeeringConnection#peering_id}

---

##### `hvn2`<sup>Optional</sup> <a name="hvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn2"></a>

```typescript
public readonly hvn2: string;
```

- *Type:* string

The unique URL of one of the HVNs being peered.

Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#hvn_2 DataHcpHvnPeeringConnection#hvn_2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#id DataHcpHvnPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HVN peering connection is located.

Always matches hvn_1's project ID. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#project_id DataHcpHvnPeeringConnection#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpHvnPeeringConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#timeouts DataHcpHvnPeeringConnection#timeouts}

---

### DataHcpHvnPeeringConnectionTimeouts <a name="DataHcpHvnPeeringConnectionTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.Initializer"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

const dataHcpHvnPeeringConnectionTimeouts: dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#default DataHcpHvnPeeringConnection#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/hvn_peering_connection#default DataHcpHvnPeeringConnection#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpHvnPeeringConnectionTimeoutsOutputReference <a name="DataHcpHvnPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataHcpHvnPeeringConnection } from '@cdktf/provider-hcp'

new dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHcpHvnPeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

---



