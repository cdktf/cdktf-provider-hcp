# `dataHcpHvn` Submodule <a name="`dataHcpHvn` Submodule" id="@cdktf/provider-hcp.dataHcpHvn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpHvn <a name="DataHcpHvn" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn hcp_hvn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

new dataHcpHvn.DataHcpHvn(scope: Construct, id: string, config: DataHcpHvnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig">DataHcpHvnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig">DataHcpHvnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.putTimeouts"></a>

```typescript
public putTimeouts(value: DataHcpHvnTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpHvn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isConstruct"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

dataHcpHvn.DataHcpHvn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isTerraformElement"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

dataHcpHvn.DataHcpHvn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isTerraformDataSource"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

dataHcpHvn.DataHcpHvn.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.generateConfigForImport"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

dataHcpHvn.DataHcpHvn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataHcpHvn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpHvn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpHvn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpHvn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.providerAccountId">providerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference">DataHcpHvnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.hvnIdInput">hvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.hvnId">hvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `providerAccountId`<sup>Required</sup> <a name="providerAccountId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.providerAccountId"></a>

```typescript
public readonly providerAccountId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpHvnTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference">DataHcpHvnTimeoutsOutputReference</a>

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.hvnIdInput"></a>

```typescript
public readonly hvnIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataHcpHvnTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a>

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpHvnConfig <a name="DataHcpHvnConfig" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.Initializer"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

const dataHcpHvnConfig: dataHcpHvn.DataHcpHvnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.hvnId">hvnId</a></code> | <code>string</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#id DataHcpHvn#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HVN is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#hvn_id DataHcpHvn#hvn_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#id DataHcpHvn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HVN is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#project_id DataHcpHvn#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpHvnTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#timeouts DataHcpHvn#timeouts}

---

### DataHcpHvnTimeouts <a name="DataHcpHvnTimeouts" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts.Initializer"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

const dataHcpHvnTimeouts: dataHcpHvn.DataHcpHvnTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#default DataHcpHvn#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn#default DataHcpHvn#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpHvnTimeoutsOutputReference <a name="DataHcpHvnTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataHcpHvn } from '@cdktf/provider-hcp'

new dataHcpHvn.DataHcpHvnTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHcpHvnTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.dataHcpHvn.DataHcpHvnTimeouts">DataHcpHvnTimeouts</a>

---



